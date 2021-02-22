exports.renderComponent = function ({
    render, script
}) {
    script.prototype.render = render;
    return script;
}