function template(
    { template },
    opts,
    {
      imports, componentName, props, jsx, exports,
    }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  
    return typeScriptTpl.ast`
        ${imports}

        const ${componentName} = (props: React.FC<Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'>>) => ${jsx};

        export default ${componentName};
    `;
}

module.exports = template;
