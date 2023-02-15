$('.subtitle').hide()

var options_t = {
  strings: ['hi! my name is', 'but you can call me', ''],
  typeSpeed: 40,
  backDelay: 5000,
  loop: false,
  showCursor: false
};

var typed_t = new Typed('.title-tip-typed', options_t);

var options_m = {
  strings: ['divyank jain', 'divy'],
  smartBackspace: true,
  backDelay: 7000,
  backSpeed: 40,
  typeSpeed: 40,
  loop: false,
  showCursor: false,
  onComplete: (self) => {
    $('.subtitle').fadeIn('slow');
  }
}
var typed_m = new Typed('.title-text-typed', options_m);