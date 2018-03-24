var prepTime = 0,
    mini = document.querySelector('#mini'),
    small = document.querySelector('#small'),
    medium = document.querySelector('#medium'),
    large = document.querySelector('#large'),
    xLarge = document.querySelector('#xLarge'),
    coldSand = document.querySelector('#coldSand'),
    toastSand = document.querySelector('#toastSand'),
    hotSand = document.querySelector('#hotSand'),
    pasta = document.querySelector('#pasta'),
    wings = document.querySelector('#wings'),
    pizzaBread = document.querySelector('#pizzaBread'),
    breadSticks = document.querySelector('#breadSticks'),
    soup = document.querySelector('#soup'),
    salads = document.querySelector('#salads'),
    driveTime = document.querySelector('#deliveryTime'),
    submitBtn = document.querySelector('#submitBtn');


const miniTime = 12,
      smallTime = 12,
      medTime = 12,
      largeTime = 15,
      xLargeTime = 15,
      coldSandTime = 2,
      toastSandTime = 4,
      hotSandTime = 6,
      pizzaBreadTime = 5,
      breadSticksTime = 5,
      saladTime = 4,
      soupTime = 1,
      pastaTime = 8,
      wingsTime = 11;

  function addTime(event){
      switch (event.target.id) {
        case 'mini':
          prepTime+=miniTime;
          break;
        case 'small':
          prepTime+=smallTime;
          break;
        case 'medium':
          prepTime+=medTime;
          break;
        case 'large':
          prepTime+=largeTime;
          break;
        case 'xLarge':
          prepTime+=xLargeTime;
          break;
        case 'coldSand':
          prepTime+=coldSandTime;
          break;
        case 'toastSand':
          prepTime+=toastSandTime;
          break;
        case 'hotSand':
          prepTime+=hotSandTime;
          break;
        case 'pasta':
          prepTime+=pastaTime;
          break;
        case 'wings':
          prepTime+=wingsTime;
          break;
        case 'pizzaBread':
          prepTime+=pizzaBreadTime;
          break;
        case 'breadSticks':
          prepTime+=breadSticksTime;
          break;
        case 'soup':
          prepTime+=soupTime;
          break;
        case 'salads':
          prepTime+=saladTime;
          break;
        case 'submitBtn':
          prepTime+=parseInt((deliveryTime.value));
          submitBtn.style.display = 'none';
          alert(`The Customer's Meal Will Be Delivered in ${prepTime} Minutes or So`);
          break;
        default:



      }
      console.log(prepTime);
  }

  document.addEventListener('click',addTime,false);
