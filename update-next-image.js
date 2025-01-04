module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.JSXOpeningElement, { name: { name: 'Image' } })
    .forEach(path => {
      const layoutAttr = path.node.attributes.find(attr => attr.name.name === 'layout');
      if (layoutAttr) {
        layoutAttr.name.name = 'fill';
      }
    });

  return root.toSource();
};