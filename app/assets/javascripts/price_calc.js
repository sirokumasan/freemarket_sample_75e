$(function(){
  
  // 値段を入力しているときだけ発火
  $('.sell-form__input--price--number_field').on('keyup', function(){
    let price  = $('.sell-form__input--price--number_field').val();
    let fee    = Math.round(price * 0.1)
    let profit = price - fee
    if (price >= 300 && price <= 9999999){
      $('.sell-form__content--price--fee__value').html(`¥ ${fee}`);
      $('.sell-form__content--price--profit__value').html(`¥ ${profit}`);
    } else if (price > 10000000){
      $('.sell-form__content--price--fee__value').html("ー");
      $('.sell-form__content--price--profit__value').html("ー");
    } else if (price < 300){
      $('.sell-form__content--price--fee__value').html("ー");
      $('.sell-form__content--price--profit__value').html("ー");
    }
  })

});