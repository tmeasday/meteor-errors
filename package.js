Package.describe({
  summary: "A pattern to display application errors to the user",
  version: "0.2.1",
  name: "twigatech:errors",
  description: "A pattern to display application errors to the user",
  homepage: "https://github.com/twigatech/meteor-errors",
  author: "Joel Braun <joel.m.braun@gmail.com>",
  git: "https://github.com/twigatech/meteor-errors.git"
});

Package.onUse(function (api, where) {
  api.use(['minimongo@1.0.5', 'mongo-livedata@1.0.6', 'templating@1.0.9'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('twigatech:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
