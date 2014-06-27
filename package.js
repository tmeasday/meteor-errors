Package.describe({
  summary: "A pattern to display application errors to the user",
  version: "0.2.1",
  githubUrl: "https://github.com/tmeasday/meteor-errors.git"
});

Package.on_use(function (api, where) {
  // This doesn't seem to work
  // api.versionsFrom('METEOR-CORE@0.9.0')
  
  api.use(['minimongo@1.0.0', 'mongo-livedata@1.0.0', 'templating@1.0.0'], 'client');

  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  
  api.export('Errors');
});

Package.on_test(function(api) {
  api.use('tmeasday:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  
  
  api.add_files('errors_tests.js', 'client');
});
