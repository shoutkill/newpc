$(document).ready(function () {
    
    var checkit = $('.filter .dropdown-menu input:checked');
    if (checkit.length !== 0){
        cloneItemFilt(checkit);
    }
    
    
	$('select').styler();
    test = $("div:contains('HDD Western Digital Blue 1Tb 7200rpm')").parent('.item5')
    $(test).css('display','none')
    
	$(".fancybox").fancybox();

	$('.slider-banner').owlCarousel({
        items:1,
        loop:true,
		dots:true,
		nav:false,
		navText : ["",""],
        center:true,
    });
	
	$('.advantages-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace){
		  return;
		}
		var carousel = e.relatedTarget;
		$('.advantages-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}).owlCarousel({
        items:1,
        loop:true,
		margin: 650,
		dots:false,
		nav:true,
		navText : ["",""],
        center:true,
    });
	
	$('.detail-slider').owlCarousel({
        items:2,
        loop:true,
		dots:false,
		nav:true,
		navText : ["",""],
        center:true,
		margin: 0,
		autoWidth:true,
    });
	
	$('.equipment-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace){
		  return;
		}
		var carousel = e.relatedTarget;
		$('.equipment-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}).owlCarousel({
        items:1,
        loop:true,
		margin: 650,
		dots:false,
		nav:true,
		navText : ["",""],
        center:true,
    });
	
	$('.we-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace){
		  return;
		}
		var carousel = e.relatedTarget;
		$('.we-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}).owlCarousel({
        items:2,
        loop:true,
		dots:false,
		nav:true,
		navText : ["",""],
        center:true,
		margin: 65,
		autoWidth:true,
		responsive:{
            0:{
                items:1,
				autoWidth:false,
            },
            992:{
                items:2
            }
        },
    });
	
	$('.compare_slider').owlCarousel({
        items:3,
        loop:false,
		dots:false,
		nav:false,
		navText : ["",""],
		margin: 20,
		responsive:{
            0:{
                items:2,
				nav:false,
				autoWidth:false,
            },
            992:{
                items:3,
				nav:true,
            }
        },
    });
	
	$('.search .personal-link').click(function() {
        $(this).closest('.search').toggleClass('active');
		if($(this).closest('.search').hasClass('active')){
			$('#navbarSupportedContent').addClass('menu_off');
			$('header .navbar').addClass('bg');
		} else {
			$('#navbarSupportedContent').removeClass('menu_off');
			$('header .navbar').removeClass('bg');
		}
		$('#navbarSupportedContent').removeClass('show');
    });

	$('.user .personal-close').click(function() {
		$(this).closest('.user').removeClass('active');
		$('.personal-item').removeClass('d-none');
		$('#navbarSupportedContent').removeClass('menu_off');
		$('header .navbar').removeClass('bg');
    });

	$('.user .personal-link').click(function() {
        $(this).closest('.user').toggleClass('active');
		$('.personal-item').toggleClass('d-none');
		$('header .search').removeClass('active');
		if($(this).closest('.user').hasClass('active')){
			$('#navbarSupportedContent').addClass('menu_off');
			$('header .navbar').addClass('bg');
		} else {
			$('#navbarSupportedContent').removeClass('menu_off');
			$('header .navbar').removeClass('bg');
		}
    });
	
	$('.scheck').on('input keyup', function(e) {
		var search = $(this).val();
		if (search == '') {
			$('.search_submit').attr('disabled', 'disabled');
		} else {
			$('.search_submit').removeAttr('disabled');
		}
	});
	
	$('.ucheck').on('input keyup', function(e) {
		var password = $('.ucheck_password').val();
		var login = $('.ucheck_login').val();
		if (password == '' || login == '') {
			$('.user_submit').attr('disabled', 'disabled');
		} else {
			$('.user_submit').removeAttr('disabled');
		}
	});
	
	$('.ucheck_mob').on('input keyup', function(e) {
		var password = $('.ucheck_mob_password').val();
		var login = $('.ucheck_mob_login').val();
		if (password == '' || login == '') {
			$('.user_mob_submit').attr('disabled', 'disabled');
		} else {
			$('.user_mob_submit').removeAttr('disabled');
		}
	});
	
	$('.submenu__to').on('click', function(e){
		$('.mob-menu-submenu').removeClass('active');
		$('#navbarSupportedContent').addClass('submenu_on');
		var to = $(this).attr('href');
		console.log(to);
		$(to).addClass('active');
		e.preventDefault();
		return false;
	});

	$('.submenu__exit').on('click', function(){
		var wrap = $(this).closest('.mob-menu-submenu');
		$('#navbarSupportedContent').removeClass('submenu_on');
		wrap.removeClass('active');
		return false;
	});
	
	$('.tabs .tab').click(function() {
        $('.tabs-content .active, .tabs .active').removeClass('active');
        $('.tabs-content ' + $(this).attr('data-id')).addClass('active');
        $(this).addClass('active');
    });
	
	$('.accordion').click(function() {
        $(this).toggleClass('active');
    });
	
	$('.history_btn').click(function() {
		if($(this).hasClass('active')){
			$(this).closest('.history_items').removeClass('open');
			$(this).removeClass('active');
			$(this).html('Подробнее');
		} else {
			$(this).closest('.history_items').addClass('open');
			$(this).addClass('active');
			$(this).html('Свернуть');
		}
    });	
	
	$('.component:not(.one) .component-select .name').click(function() {
		var comp = $(this).closest('.component-select');
		if(comp.hasClass('lazy-load')){
			comp.removeClass('lazy-load');
			comp.find('img').attr('src', false);
		}
		if(comp.hasClass('active')){
			comp.removeClass('active');
			comp.find('input:not(.checked)').prop('checked', false);
			comp.find('input.checked').prop('checked', true);
		} else {
			comp.addClass('active');
		}
    });

	$('#components').click(function() {
		$("#components img").each(function() {
			$(this).attr("src",$(this).attr("data-src"));
		});
    });

	$('.component-btn').click(function(e) {
		e.preventDefault();
		var comp = $(this).closest('.component-select');
		comp.removeClass('active');
		comp.find('input').removeClass('checked');
		comp.find('input:checked').addClass('checked');
		if(comp.find('input:checked').get() !== 0){
			comp.addClass('success');
		}
		if($(this).hasClass('configurator-btn')){
			comp.find('.added').removeClass('added');
			var sum = parseInt($('.configurator_sum span').html());
			if($(this).siblings(".price_configurator").val()){
				var price = parseInt($(this).siblings(".price_configurator").val());
			} else {
				var price = 0;
				$(this).after('<input type="hidden" value="0" class="price_configurator">');
			}
			var price_new = parseInt(comp.find('input:checked').attr('data-price'));
			sum = sum - price + price_new;
			$(this).siblings(".price_configurator").val(price_new)
			$('.configurator_sum span').html(sum);
			$('#SUM_ORDER_INPUT').val(sum);
		}
		$('#components .component-select').each(function() {
			if($(this).hasClass('success')){
				$('#components .component-send').removeAttr('disabled');
			} else {
				$('#components .component-send').attr('disabled', 'disabled');
				return false;
			}
		}); 
    });
	jQuery('.component-checkbox').scrollbar();

});
function cloneItemFilt(data){ // Клонирует выбранный фильтр
    $(data).each(function(el,ind){
        $(this).closest('label').clone().appendTo('#filter-use-block'); 
    });
    var spans = $('#filter-use-block label>span');
    $(spans).each(function(el,ind){
        $(this).append("<span class='x-close'>X</span>"); 
    });
}
function CloseModal(data){
    $(data).hide();
}
function addToFuryCart(){
    $('#myModpre').click()
}
function selectOpen(th){
	$(th).toggleClass('active');
}
function filterBtn(th){
	$('.catalog_filter').toggleClass('active');
	$('.sort_btn').removeClass('active');
	$('.catalog_sort').removeClass('active');
	$(th).toggleClass('active');
}
function sortBtn(th){
	$('.catalog_sort').toggleClass('active');
	$('.filter_btn').removeClass('active');
	$('.catalog_filter').removeClass('active');
	$(th).toggleClass('active');
}
function catalogClose(th){
	$('.catalog_filter').removeClass('active');
	$('.catalog_sort').removeClass('active');
	$('.filter_btn').removeClass('active');
	$('.sort_btn').removeClass('active');
}
function submitFilter(){
	$('#set_filter').click();
}

function tabStange(id,nextId){
	$('#stange-'+id).hide();
	$('#stange-'+nextId).show();
}
function backStange(id,nextId){
	$('#stange-'+id).hide();
	$('#stange-'+nextId).show();
}
function propsSum(){
	$("#sale_order_props .order_props").each(function(){
		var name = $(this).attr("name");
		$(".order_props_sum[data-for='"+name+"']").val($(this).val());
	});
}
function deliverySum(){
	var adress = "";
	$("#stange-3 input").each(function(){
		var name = $(this).attr("name");
		adress = adress + $(this).val() + ", ";
		$(".delivery_info input[data-for='"+name+"']").val($(this).val());
		if(name == "city"){
			$(".order_city").val($(this).val());
		}
	});
	$('.adressSum').val(adress);
}
function checkboxSum(){
	var adress = "";
	var delivery = $("input[name='DELIVERY_ID']:checked ~ label");
	var payment = $("input[name='PAY_SYSTEM_ID']:checked ~ label");

	$('.delivery_sum .name').html(delivery.find('.name').html());
	$('.delivery_sum .desc').html(delivery.find('.desc').html());
	$('.payment_sum .name').html(payment.find('.name').html());
}
function gameSelect(val){
	$('.detail_games > .checkbox_empty > input').prop('checked', false);
	$('#'+val).prop('checked', true);
}
function displaySelect(val){
	$('.fps_game > div').hide();
	$('.fps_game .'+val).show();
}
function deliveryToggle(delivery){
	if(delivery){
		$('.btn_selfpicking').hide();
		$('.btn_delivery').show();
		$('.adressSum').val('');
	}else{
		$('.btn_selfpicking').show();
		$('.btn_delivery').hide();
		$('.adressSum').val('Самовывоз');
	}
}
function preLoader(){
	$('body').append('<div id="wait_custom"></div>');
}

/*$(document).on('click', '[data-item-type]', function () {
    let offerID = $(this).attr('data-offer');
    let id = $(this).attr('data-id');

    if ($(this).attr('data-item-type') == 'list') {
        let link = $(this).attr('data-link');
        $.ajax({
            url: link,
            type: "GET",
            data: {id:id, offer: offerID},
           success: function (data) {
                //console.log($(data).html());
                $('.ns-catalog-element').html($(data).html());
            }
        });
        return false;
    } else if ($(this).attr('data-item-type') == 'detail') {
        $.ajax({
            url: window.location.href,
            type: "GET",
            data: {id:id, offer: offerID},
            success: function (data) {
                //console.log($(data).html());
                $('.ns-catalog-element').html($(data).html());
            }
        });
        return false;
    }
})*/