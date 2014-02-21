module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '',
      dest: 'dist',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'images/{,*/}*.{webp,gif}',
        'bower_components/requirejs/require.js'
      ]
    }]
  }
};
