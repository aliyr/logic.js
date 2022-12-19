const isUpperCamelCase = (str) => {
    return /\b[A-Z][a-z]*([A-Z][a-z]*)*\b/.test(str)
}

module.exports = function (babel) {
    const t = babel.types;
    return {
        visitor: {
            JSXElement(path) {

                let callExpression = ""

                const openingElement = path.node.openingElement;
                let tagName = openingElement.name.name;
                // in case tag name is html tag
                if (!isUpperCamelCase(tagName)) {
                    const args = [];

                    const attribs = t.objectExpression(
                        [
                            t.objectProperty(t.stringLiteral('style'), t.objectExpression([])),
                            t.objectProperty(t.stringLiteral('class'), t.objectExpression([])),
                            t.objectProperty(t.stringLiteral('on'), t.objectExpression([])),
                            t.objectProperty(t.stringLiteral('dataset'), t.objectExpression([])),
                            t.objectProperty(t.stringLiteral('props'), t.objectExpression([])),
                        ]
                    )
                    openingElement.attributes.forEach((item) => {
                        const attrName = item.name.name
                        const value = item.value.expression
                        if (attrName === 'class') {
                            if (typeof value === 'object') {
                                attribs.properties[1].value = value
                            } else if (item.value.type === 'StringLiteral') {
                                tagName = tagName + `.${item.value.value}`
                            }
                        } else if (attrName.includes('on-')) {
                            let eventName = attrName.split('-')
                            eventName.shift()
                            eventName = eventName.join('')

                            attribs.properties[2].value.properties.push(
                                t.objectProperty(t.stringLiteral(eventName), value)
                            )
                        } else if (attrName.includes('data-')) {
                            let dataAttrName = attrName.split('-')
                            dataAttrName.shift()
                            dataAttrName = dataAttrName.join('')

                            let dataAttrValue
                            if (item.value.type === "StringLiteral") {
                                dataAttrValue = item.value
                            } else {
                                dataAttrValue = item.value.expression
                            }

                            attribs.properties[3].value.properties.push(
                                t.objectProperty(t.stringLiteral(dataAttrName), dataAttrValue)
                            )
                        } else {
                            const propName = attrName
                            let propValue
                            if (item.value.type === "StringLiteral") {
                                propValue = item.value
                            } else {
                                propValue = item.value.expression
                            }

                            attribs.properties[4].value.properties.push(
                                t.objectProperty(t.stringLiteral(propName), propValue)
                            )
                        }
                    })

                    args.push(t.stringLiteral(tagName));
                    args.push(attribs);

                    // manipulating children
                    const children = t.arrayExpression([])
                    path.node.children.forEach((item) => {
                        if (item.type === 'JSXText') {
                            children.elements.push(t.stringLiteral(item.value))
                        } else if (item.type === 'JSXSpreadChild') {
                            children.elements.push(t.spreadElement(item.expression))
                        } else if (item.type === 'JSXElement') {
                            children.elements.push(item)
                        } else {
                            children.elements.push(item.expression)
                        }
                    })

                    const callee = t.memberExpression(t.identifier('window'), t.identifier("h"));
                    callExpression = t.callExpression(callee, args);

                    callExpression.arguments = callExpression.arguments.concat(children);

                    path.replaceWith(callExpression, path.node);

                    // in case tagName is component
                } else {
                    callExpression = t.memberExpression(
                        t.newExpression(
                            t.identifier(tagName),
                            [
                                t.objectExpression([
                                    // TODO can be improved by using property keys instead of index
                                    t.objectProperty(
                                        t.identifier('props'),
                                        openingElement.attributes[0] ? openingElement.attributes[0].value.expression : t.objectExpression([])
                                    ),
                                    t.objectProperty(
                                        t.identifier('slot'),
                                        path.node.children.length ? path.node.children[1] : t.objectExpression([])
                                    )
                                ])
                            ]
                        ),
                        t.identifier("currentNode")
                    )
                }
                path.replaceWith(callExpression, path.node)
            },
        },
    };
}
