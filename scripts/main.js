//------------------------- sound manager site setup code ------
soundManager.setup({
  url: '/path/to/swf-files/',
  onready: function() {
      $(document).ready(function(){
        var themeSound = soundManager.createSound({
          id: 'theme',
          url: 'audiofiles/StarTrekTheme.mp3',
          volume: 20,
      });
      themeSound.play();
    })

  //----------------------------------
      $('#zulu').on('click', function(){
        var bonesSound = soundManager.createSound({
          id: 'bonesSound',
          url: 'audiofiles/bones.mp3',
      });
      bonesSound.play();
    })
    //----------------------------------

    $('#bones').mouseover(function(){
        var borgSound = soundManager.createSound({
          id: 'bonesSound',
          url: 'audiofiles/bones.mp3',
      });
      borgSound.play();
    })
    //---------------------------------
    $('#scotty').on('click', function(){
        var scottySound = soundManager.createSound({
          id: 'scottySound',
          url: 'audiofiles/scotty.mp3',
      });
      scottySound.play();
    })
    //--------------------------------
    $('#spock').on('click', function(){
        var spockSound = soundManager.createSound({
          id: 'spockSound',
          url: 'audiofiles/spock.mp3',
          volume: 100,
      });
      spockSound.play();
    })
    //--------------------------------
    $('#kirk').on('click', function(){
        var kirkSound = soundManager.createSound({
          id: 'kirkSound',
          url: 'audiofiles/kirk.mp3',
          volume: 100,
      });
      kirkSound.play();
    })
    //---------------------------------
    $('#bones').on('click', function(){
        var bones2Sound = soundManager.createSound({
          id: 'bones2Sound',
          url: 'audiofiles/bones2.mp3',
          volume: 100,
      });
      bones2Sound.play();
    })
    //---------------------------------
    $('#checkov').on('click', function(){
        var kirk2Sound = soundManager.createSound({
          id: 'kirk2Sound',
          url: 'audiofiles/kirk2.mp3',
          volume: 100,
      });
      kirk2Sound.play();
    })
    //---------------------------------
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});
soundManager.setup();
