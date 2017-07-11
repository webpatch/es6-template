module.exports = {
  prompt: [
    {
      type: 'confirm',
      name: 'unit',
      message: 'Is need unit testing?',
      default: false,
    },
  ],
  completeMessage: 'To get started:\n\n cd <%=destPath%>\n  npm install\n  npm start\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {
    'test/*': 'unit',
    'dev/bage.js': 'unit',
    'dev/karma.conf.js': 'unit',
  },
  ignore: []
};