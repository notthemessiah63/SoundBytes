//------------------------- sound manager site setup code ------
soundManager.setup({
  url: '/path/to/swf-files/',
  onready: function() {
      $(document).ready(function(){
        var themeSound = soundManager.createSound({
          id: 'theme',
          url: 'audiofiles/StarTrekTheme.mp3',
          volume: 40,
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

    $('#bones').on('click', function(){
        var bonesSound = soundManager.createSound({
          id: 'bones2Sound',
          url: 'audiofiles/bones2.mp3',
      });
      bonesSound.play();
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
    $('#kirk2').on('click', function(){
        var kirk2Sound = soundManager.createSound({
          id: 'kirk2Sound',
          url: 'audiofiles/kirk2.mp3',
          volume: 100,
      });
      kirk2Sound.play();
    })
    //---------------------------------
    $('#cf-enterprise').on('click', function(){
        var klingonSound = soundManager.createSound({
          id: 'klingonSound',
          url: 'audiofiles/klingonweapon.mp3',
          volume: 100,
      });
      klingonSound.play();
    })
    //---------------------------------
    $('#checkov').on('click', function(){
        var scotty2Sound = soundManager.createSound({
          id: 'scotty2Sound',
          url: 'audiofiles/scotty2.mp3',
          volume: 100,
      });
      scotty2Sound.play();
    })
    //---------------------------------
    $('#ahura').on('click', function(){
        var ahuraSound = soundManager.createSound({
          id: 'ahuraSound',
          url: 'audiofiles/unabletocomply.mp3',
          volume: 100,
      });
      ahuraSound.play();
    })
    //---------------------------------
    $('#medic').on('click', function(){
        var medicSound = soundManager.createSound({
          id: 'destructSound',
          url: 'audiofiles/autodestruct.mp3',
          volume: 100,
      });
      medicSound.play();
    })
    //---------------------------------
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});
soundManager.setup();
