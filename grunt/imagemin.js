module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: './images',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: 'dist/images'
    }]
  }
};
