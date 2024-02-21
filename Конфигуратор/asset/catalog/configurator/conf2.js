function restartConf(){
    history.go(0);
}
// EVENTS
$(document).ready(function(){

    $('#closemyalert').on('click',function(){
        $('#myalert').css('display','none');
        $('.item-off').css('display','none');
    })
    $('#closeMyStepAlert').on('click',function(){
        $('#myalertstep').css('display','none');
        $('.alert-item').css('display','none');
    })
    
   
    $('#step-2').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#filter-gen').show();
        $('#closeMyStepAlert').click(); 
        var platform = $('.handler').attr('data-platf');
        if (platform == null){
            stepAlert(1);
        } else {
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
           
         
           cpuFilt(platform);
        }
    })
   
    $('#step-3').on('click',
        function(){
           $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        $('#filter-gen').hide();
        $('#filter-chipset').show();
        var item = "step-3";
        $('#'+item).removeClass('fury-warning');
        $('#'+item+' .fury-w').hide();
        $('#'+item).addClass('active');
        var socet = $('#'+item).attr('data-soc');
            
            
        if (socet === "") {
            stepAlert(2);
        } else {
            
           $('.clforoff').hide();
           $('.wrap-items').removeClass('active-item');
           $('.step-3').show();
           $('.'+item+' .'+socet).show();
           $('.'+item+' .'+socet).addClass('active-item');
           $('.filter-block button').hide();
            
           preFiltersManuf();
           preFilterType();
        } 
    });
    
    $('#step-4').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#filter-chipset').hide();
        $('#filter-amount-ram').show();
        var item = "step-4";
        $('#'+item).removeClass('fury-warning');
        $('#'+item+' .fury-w').hide();
        $('#'+item).addClass('active');
        $('#closeMyStepAlert').click(); 
        var pamyat = $('#'+item).attr('data-ram');
        if (pamyat === ""){
            stepAlert(3);
        } else {
            $('.clforoff').hide();
            $('.wrap-items').removeClass('active-item');
            $('.step-4').show();
            $('.'+item+' .'+pamyat).show();
            $('.'+item+' .'+pamyat).addClass('active-item');
            $('.filter-block button').hide()
            $('.step-manuf button').hide();
            
            preFiltersManuf();
            preFilterType();
            document.body.scrollTop = document.documentElement.scrollTop = 200;
        }
    });
   
    $('#step-5').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#filter-gen').hide()
        $('#filter-gpu').show();
        $('#closeMyStepAlert').click(); 
        var item = "step-5";
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-5').show();
        $('.step-5 .wrap-items').show();
        $('.step-5 .wrap-items').addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        
//        preFiltersManufGpu();
//        preFilterModelGpu();
//        preFilterAmountGpu();
        preFiltersManuf();
        preFilterType();
            
        document.body.scrollTop = document.documentElement.scrollTop = 200;
    });
    
    $('#step-6').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        $('#filter-gpu').hide();
        $('#filter-amount-ram').show();
        var item = "step-6";
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-6').show();
        $('.step-6 .wrap-items').show();
        $('.step-6 .wrap-items').addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        
        preFiltersManuf();
        preFilterType();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
    });
    
    $('#step-7').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        $('#filter-amount-disk').show();
        var item = "step-7";
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-7').show();
        $('.step-7 .wrap-items').show();
        $('.step-7 .wrap-items').addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        
        preFiltersManuf();
        preFilterType();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
    });
   
    $('#step-8').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        $('#filter-amount-disk').hide();
        $('#filter-type-cooler').show();
        var item = "step-8";
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-8').show();
        $('.step-8 .wrap-items').show();
        $('.step-8 .wrap-items').addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        
        preFiltersManuf();
        preFilterType();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
    });
   
    $('#step-9').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        $('#filter-type-cooler').hide();
        var item = "step-9";
        var minpower = $('#'+item).attr('data-ps');
        if (minpower == null){
            stepAlert(4);
        } else {
        
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-9').show();
        var allpower = $('#part-9 .wrap-items').map(function(index,element){
            return $(element).attr('data-type');
        });
        var arrpower = allpower.get();
        var p=0;    
        for (p; p <= arrpower.length; p++){
            if (arrpower[p] >= minpower){
                $('.wrap-items.'+arrpower[p]).addClass('active-item');
            }
        }
        $('.step-9 .active-item').show();
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        
        preFiltersManuf();
        preFilterType();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
        }    
    });
   
    $('#step-10').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        var item = "step-10";
        var cool = $('#'+item).attr('data-cool');
        if (cool == null){
            stepAlert(5);
        } else {
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.wrap-items').hide();
        $('.step-10').show();
        $('.'+item+' .'+cool).show();
        $('.'+item+' .'+cool).addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();

        preFiltersManuf();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
        }
    });
  
    $('#step-11').on('click',function(){
        $('.confury-step').each(function(el,ind){
           $(this).removeClass('active'); 
        });
        $('#closeMyStepAlert').click(); 
        var item = "step-11";
        $('#'+item).addClass('active');
        $('.clforoff').hide();
        $('.wrap-items').removeClass('active-item');
        $('.step-11').show();
        $('.step-11 .wrap-items').show();
        $('.step-11 .wrap-items').addClass('active-item');
        $('.filter-block button').hide();
        $('.step-manuf button').hide();
        document.body.scrollTop = document.documentElement.scrollTop = 200;
    });
});

function cpuFilt(data){
    $('#part-2').show('1000'); 
    $('#step-one').hide(); 
    $('.confury-step.cs-plat').removeClass('active'); 
    $('.confury-step.cs-plat').removeClass('noactive'); 
    $('.confury-step.cs-cpu').addClass('active');
    $('.platf.'+data).each(function(element,index){$(this).addClass('active-item');}); 
    $('.wrap-items:not(.active-item)').hide();
    $('.cs-pict.'+data).show('slow');     
    $('.cs-pict.'+data).addClass('handler');     
    activeStep('cpu'); 
}
function genFilter(data){
    var generation = $('.active-item').map(function(elem,index){
            return $(elem).attr('data-gen');                                        
   });
    var arr = generation.get();
    $('#part-2 .gen').show();
    $('#part-2 .gen:not(.'+data+')').hide()
}

function activeStep(data){
    if (data === 'cpu'){
           var res = $('.active-item').map(function(index,element){
            return $(element).attr('data-gen');
        });
        var arr = res.get();
        var i=0;
        for (i; i <= arr.length; i++){
            $('#filter-gen button.'+arr[i]).show();
        }
    }
}

function preFilterType(raz,id){
    if (raz == null){
        var chip = $('.active-item').map(function(index,element){
        return $(element).attr('data-type');
        });
        var arrchip = chip.get();
        var c=0;
        for (c; c <= arrchip.length; c++){
            $('.step-type button.'+arrchip[c]).show();
        }
    }
    if (raz != null){
        $('.step-type button').hide();
        var chip = $('.active-item.'+raz).map(function(index,element){
        return $(element).attr('data-type');
        });
        var arrchip = chip.get();
        var c=0;
        for (c; c <= arrchip.length; c++){
            $('.step-type button.'+arrchip[c]).show();
        }
    }
}

function preFiltersManuf(id,raz){
    if (raz == null){
        var res = $('.active-item').map(function(index,element){
            return $(element).attr('data-manuf');
        });
        var arr = res.get();
        var i=0;
        for (i; i <= arr.length; i++){
            $('.step-manuf button.'+arr[i]).show();
        }
    }
    if (raz != null){
        $('.step-manuf button').hide();
        var chip = $('.active-item.'+raz).map(function(index,element){
        return $(element).attr('data-manuf');
        });
        var arrchip = chip.get();
        var c=0;
        for (c; c <= arrchip.length; c++){
            $('.step-manuf button.'+arrchip[c]).show();
        }       
    }
}

function filtersManuf(id){ 
    var count = $('.'+id).attr('data-click');
    if (count > 1){
        
        preFiltersManuf();
        preFilterType();
        
        $('.step-manuf button').removeClass('have');
        $('.step-type button').removeClass('type');
        $('.'+id).attr('data-click','1');
        $('.active-item').show();
    } else {
        $('.step-manuf button').removeClass('have'); 
        $('.'+id).addClass('have'); 
        $('.'+id).attr('data-click','2'); 
        var actfil = $('.step-type button.type').attr('data-type');
        if (actfil == null){
            $('.active-item').show();
            $('.active-item:not(.'+id+')').hide();
            
            preFilterType(id);
        }
        if (actfil != null){
            $('.active-item.'+actfil).show();
            $('.active-item.'+actfil+':not(.'+id+')').hide();
            
            preFilterType(id);
        }
    }
}
    
function filterType(id,nomenc){
    var count = $('.'+id).attr('data-click');
    if (count > 1){
        
        preFilterType();
        preFiltersManuf();
        
        $('.step-manuf button').removeClass('have');
        $('.step-type button').removeClass('type');
        $('.'+id).attr('data-click','1');
        $('.active-item').show();
    } else {
        $('.step-type button').removeClass('type'); 
        $('.step-type .'+id).addClass('type'); 
        $('.'+id).attr('data-click','2');
        var actmanuf = $('.step-manuf button.have').attr('data-manuf');
        if (actmanuf == null){
            $('.active-item').show();
            $('.active-item:not(.'+id+')').hide();
            
            preFiltersManuf('',id);
        }
        if (actmanuf != null){
            $('.active-item.'+actmanuf).show();
            $('.active-item.'+actmanuf+':not(.'+id+')').hide();
            
            preFiltersManuf('',id);
        }
    }
}
 
function addToleft(id,step,quant){
    deleteToLeft(step,id); 
    
    $('#'+id+' .prevpict img').clone().appendTo('#step-'+step+' .res-sel-pict'); 
    $('#'+id+' .conf-item-name').clone().appendTo('#step-'+step+' .res-sel-name'); 
    var resprice = $('#'+id+' .conf-item-price').html(); 
    $('#'+id+' .conf-item-price').clone().prependTo('#step-'+step+' .res-sel-price'); 
//    if (quant > 1){
        $('#step-'+step+' .res-sel-quant').html('x '+quant+' шт.'); 
        $('#step-'+step+' .res-sel-quant').attr('data-quant',quant); 
        $('#step-'+step+' .res-sel-quant').attr('data-ids',id); 
    //};
    $('#'+id+' .first:not(.'+id+')').html('ДОБАВИТЬ');
    $('#'+id+' .confadd:not(.'+id+')').attr('data-click','1');
    var catprice = Number(resprice);
    if (quant == 1 || quant == null){
        totalSummary(catprice,1);
    } else {
        totalSummary(catprice,quant);
    }   
}

function deleteToLeft(step,id){
    var delprice = $('#step-'+step+' .res-sel-price .conf-item-price').html();
    var delqunant = $('#step-'+step+' .res-sel-quant').attr('data-quant');
    var elem = '#summary';
    var sum = $(elem).attr('data-sum');
    if (delprice !=null && delqunant == null){ 
        var negtotal = Number(sum) - Number(delprice);
        $(elem).attr('data-sum',negtotal);
        $(elem).html(negtotal);
    }
    if (delprice != null && delqunant != null){ 
        var negtot = Number(sum) - (Number(delprice)*Number(delqunant));
        $(elem).attr('data-sum',negtot);
        $(elem).html(negtot);
    }
    $('#step-'+step+' .res-sel-pict').empty();
    $('#step-'+step+' .res-sel-name').empty();
    $('#step-'+step+' .res-sel-price').empty();
    $('#step-'+step+' .res-sel-quant').empty();

} 

function totalSummary(price,quant){
    var elem = '#summary'
    var sum = $(elem).attr('data-sum');
   
    if (sum == 0){
        $(elem).attr('data-sum',price);
        outNum(price,elem);        
    }
    else if (sum != 0 && quant === 1){
        var total = Number(sum) + Number(price);
        $(elem).attr('data-sum',total);
        outNum(total,elem);
    }
    if (quant >= 2){
        var qtotal = (Number(price)*Number(quant)) + Number(sum);
        $(elem).attr('data-sum',qtotal);
        outNum(qtotal,elem);
    }
}

function partCPU(id,socet){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(2);
        chet++;
         $('#part-2 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } 
    else {
        if($('#res-mb-pict').children('img').length > 0) {
            idMother = $('#res-mb-pict img').attr('class');
            socMother = $('#'+idMother).attr('data-soc');
            if(socMother != socet){
                deleteToLeft(3);
                $('#step-3').addClass('fury-warning');
                $('#step-3 .fury-w').show();
            };    
        };
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        $('#part-2 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,2,1);
    }
    
    $('#step-3').attr('data-soc',socet);
    preTest();
 
}
   
function partMother(id,ddr){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ'); 
        deleteToLeft(3);
        chet++;
        $('#part-3 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        if($('#res-ram-pict').children('img').length > 0) {
            idRam = $('#res-ram-pict img').attr('class');
            console.log(idRam);
            socRam = $('#'+idRam).attr('data-ramid');
            console.log('socRam'+socRam);
            console.log('socRam'+ddr);
            if(socRam != ddr){
                deleteToLeft(4);
                $('#step-4').addClass('fury-warning');
                $('#step-4 .fury-w').show();
            };    
        };
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ'); 
        $('#'+id+' .confadd').attr('data-click',chet);
        $('#part-3 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,3,); 
    }
    $('#step-4').attr('data-ram',ddr);
    preTest();
}    

function partRam(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    var quant = $('input.'+id).val();
    var rangeQu = 1;
    if (quant > '1'){
        rangeQu = Number(range)+Number(1);
    }
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(4);
        chet++;
        $('#part-4 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ');
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-rangeQu);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        $('#part-4 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(rangeQu);
        addToleft(id,4,quant);
    }
    preTest();
}

function partVGA(id,power){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(5); 
        chet++;
        $('#part-5 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        $('#part-5 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,5,1); 
    }
    $('#step-9').attr('data-ps',power);
    preTest();
}

function partSSD(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    var quant = $('input.'+id).val();
    var rangeQu = 1;
    if (quant > '1'){
        rangeQu = Number(range)+Number(1);
    }
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(6); 
        chet++;
        $('#part-6 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-rangeQu);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        $('#part-6 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(rangeQu);
        addToleft(id,6,quant);
        preTest();
    }
} 
// ШАГ 7. HDD
function partHDD(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    var quant = $('input.'+id).val();
    var rangeQu = 1;
    if (quant > '1'){
        rangeQu = Number(range)+Number(1);
    }
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(7); 
        chet++;
        $('#part-7 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-rangeQu);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        var quant = $('input.'+id).val();
        $('#part-7 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(rangeQu);
        addToleft(id,7,quant); 
        preTest();
    }
}

function partCool(id,type){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(8); 
        chet++;
        $('#part-8 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        var quant = $('input.'+id).val();
        $('#part-8 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,8,1); 
    }
    $('#step-10').attr('data-cool',type);
    preTest();
} 

function partPS(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(9); 
        chet++;
        $('#part-9 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        var quant = $('input.'+id).val();
        $('#part-9 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,9,1); 
    }
    preTest();
}

function partCase(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    var range = $('#'+id).attr('data-index');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(10);
        chet++;
        $('#part-10 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
        var prerange = Number(-range);
        MathPrcFillGameResultNoIndex(prerange);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        var quant = $('input.'+id).val();
        $('#part-10 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        MathPrcFillGameResultNoIndex(range);
        addToleft(id,10,1);
    }
    preTest();
}

function partOs(id){
    var chet = $('#'+id+' .confadd').attr('data-click');
    if (chet % 2 === 0){   
        $('#'+id+' .confadd .first').html('ДОБАВИТЬ');
        deleteToLeft(11); 
        chet++;
        $('#part-11 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        $('#'+id+' .confadd').attr('data-click',chet);
    } else {
        chet++;
        $('#'+id+' .confadd .first').html('УДАЛИТЬ');
        $('#'+id+' .confadd').attr('data-click',chet);
        var quant = $('input.'+id).val();
        $('#part-11 .confadd:not(.'+id+')').each(function(element,index){
            $(this).attr('data-click','1');
            $(this).children().html('ДОБАВИТЬ')
        })
        addToleft(id,11,1); 
    }
    preTest();
}
function stepAlert(data){
    var itemId = "#myalertstep";
    var itemCl = " .alert-item";
    $(itemId).css('display','flex');
    if(data == 1){
        $(itemId+itemCl+'.one').show();
    }
    if(data == 2){
        $(itemId+itemCl+'.two').show();
    }
    if(data == 3){
        $(itemId+itemCl+'.three').show();
    }
    if(data == 4){
        $(itemId+itemCl+'.four').show();
    }
    if(data == 5){
        $(itemId+itemCl+'.five').show();
    }
}    
function addcartConf(){
    // ПРОВЕРЯЕМ ЗАПОЛНЕНОСТЬ ВСЕХ ШАГОВ
    var preprice = $('#summary').attr('data-sum');
    var price = Number(preprice);
    var cpu = $('#res-cpu-pict img').attr('class');
    var mb = $('#res-mb-pict img').attr('class');
    var ram = $('#res-ram-pict img').attr('class');
    var vga = $('#res-vga-pict img').attr('class');
    var ssd = $('#res-ssd-pict img').attr('class');
    var hdd = $('#res-hdd-pict img').attr('class');
    var cool = $('#res-cool-pict img').attr('class');
    var ps = $('#res-ps-pict img').attr('class');
    var cases = $('#res-case-pict img').attr('class');
    var os = $('#res-os-pict img').attr('class');
    var item = ".item-error-";
    if(cpu == null){
        $(item+'cpu').show();
    }
    if(mb == null){
        $(item+'mb').show();
    }
    if(ram == null){
        $(item+'ram').show();
    }
    if(vga == null){
        $(item+'vga').show();
    }
    if(ssd == null){
        $(item+'ssd').show();
    }
    if(hdd == null){
        $(item+'hdd').show();
    }
    if(cool == null){
        $(item+'cool').show();
    }
    if(ps == null){
        $(item+'ps').show();
    }
    if(cases == null){
        $(item+'cases').show();
    }
    if(os == null){
        $(item+'os').show();
    }
    var full = $('.res-sel-pict img').map(function(index,element){
        return $(element).attr('class');
    });
    arrfull = full.get();
    if(arrfull.length >= 10){
        $.ajax({
        url: 'af.php',
        type: 'POST',
        data: {
            "cpu": cpu,    
            "mb": mb,
            "ram": ram,
            "ram-quant": $('#res-ram-quant').attr('data-quant'),
            "vga": vga,
            "ssd": ssd,
            "ssd-quant": $('#res-ssd-quant').attr('data-quant'),
            "hdd": hdd,
            "hdd-quant": $('#res-hdd-quant').attr('data-quant'),
            "cool": cool,
            "ps": ps,
            "case": cases,
            "os": os,
            "price": price,
        },
        success: function(data){
            $('#emtTitle.modal-t').html(data);
            finalyClone(); 
        }
    })    
     
    } else {
        $('#myalert').css('display','flex');
    }
} 
  

// ФУНКЦИЯ НА КАЖДОМ ШАГЕ ПОЛУЧАЕТ ИНДЕКС ПРОИЗВОДИТЕЛЬНОСТИ    
function MathPrcFillGameResultNoIndex(val,id){
    var resG = $('#gaming span.gamerange').attr('data-index'); // Получаем значение индекса, кот. уже есть.
    var rah;
       if (resG == ""){
            $('#gaming span.gamerange').attr('data-index',val);
            rah = Number(val);
        } else {
            rah = Number(resG)+Number(val);
        } 
       
    var gameRang = (rah * 100) / 20;
    var renderRang = (rah * 100) / 24;
    var strimmRang = (rah * 100) / 22;
    $('#gaming span.gamerange').css('width','0px');
    $('#render span.renderrange').css('width','0px');
    $('#strimm span.strimrange').css('width','0px');
    $('#gaming span.gamerange').attr('data-index',rah);
    $('.powers-index span').hide();
    $('.powers-index span').show();
    $('#gaming span.gamerange').animate({
        width: gameRang+'%',
    },1500);
    $('#render span.renderrange').animate({
        width: renderRang+'%',
    },1500);
    $('#strimm span.strimrange').animate({
        width: strimmRang+'%',
    },1500);
}    
    

// Анимация стоимости
const time = 10;
const step = 10;

function outNum(num, elem) {
  let e = document.querySelector(elem);
  let resN = $(elem).attr('data-sum');
  n = Number(resN)-500;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}


// ФУНКЦИЯ ЗАПУСКАЕТСЯ ПРИ УСПЕШНОЙ СБОРКЕ, КОПИРУЕТ ВЫБРАНЫЕ ЭЛЕМЕНТЫ В ИТОГОВОЕ ОКНО
function finalyClone(){
    $('#res-cpu-name .conf-item-name').clone().prependTo('#cpu-fin');
    $('#res-mb-name .conf-item-name').clone().prependTo('#mb-fin');
    $('#res-ram-name .conf-item-name').clone().prependTo('#ram-fin');
    var ramQ = $('#res-ram-quant').clone();
    $('#ram-fin .fin-quant').html(ramQ);
    $('#res-vga-name .conf-item-name').clone().prependTo('#vga-fin');
    $('#res-ssd-name .conf-item-name').clone().prependTo('#ssd-fin');
    var ssdQ = $('#res-ssd-quant').clone();
    $('#ssd-fin .fin-quant').html(ssdQ);
    $('#res-hdd-name .conf-item-name').clone().prependTo('#hdd-fin');
    var hddQ = $('#res-hdd-quant').clone();
    $('#hdd-fin .fin-quant').html(hddQ);
    $('#res-cool-name .conf-item-name').clone().prependTo('#cool-fin');
    $('#res-ps-name .conf-item-name').clone().prependTo('#ps-fin');
    $('#res-case-name .conf-item-name').clone().prependTo('#case-fin');
    $('#res-os-name .conf-item-name').clone().prependTo('#os-fin');
    $('#summary').clone().prependTo('#sum-fin');
    $('#myMod').click();
}    
// ОТПРАВЛЯЕТ ПОКУПАТЕЛЯ В КОРЗИНУ
function lastStep(){
    var url = "https://fury-pc.ru/personal/cart/";
    $(location).attr('href',url);
} 
function preTest() {
    var quant = $('.res-sel-pict img').length;
    var testquant = $('#FinalyButton').attr('data-count');
    if(quant == 10 && testquant == 1){
        $('#FinalyButton').attr('data-count',2);
        $('#FinalyButton').click();  
    }
    console.log(testquant);
}    
function clearFinaly() {
    $('#cpu-fin').empty();
    $('#mb-fin').empty();
    $('#ram-fin').empty();
    $('#vga-fin').empty();
    $('#ssd-fin').empty();
    $('#hdd-fin').empty();
    $('#cool-fin').empty();
    $('#ps-fin').empty();
    $('#case-fin').empty();
    $('#os-fin').empty();
    $('#sum-fin').empty();
    $('.emtTitle').empty();
}   
function filterGPU(id){
    var count = $('.'+id).attr('data-click');
    if (count > 1){
        
        preFilterModelGpu();
        preFiltersManufGpu();
        
        $('.step-manuf button').removeClass('have');
        $('.step-type button').removeClass('type');
        $('.'+id).attr('data-click','1');
        $('.active-item').show();
    } else {
        $('.step-type button').removeClass('type'); 
        $('.step-type .'+id).addClass('type'); 
        $('.'+id).attr('data-click','2');
        var actmanuf = $('.step-manuf button.have').attr('data-manuf');
        if (actmanuf == null){
            $('.active-item').show();
            $('.active-item:not(.'+id+')').hide();
            
            preFiltersManufGpu('',id);
        }
        if (actmanuf != null){
            $('.active-item.'+actmanuf).show();
            $('.active-item.'+actmanuf+':not(.'+id+')').hide();
            
            preFiltersManuf('',id);
        }
    }
}    
function preFiltersManufGpu(){
    var res = $('.active-item').map(function(index,element){
        return $(element).attr('data-manuf');
    });
    var arr = res.get();
    var i=0;
    for (i; i <= arr.length; i++){
        $('.step-manuf button.'+arr[i]).show();
    }
}
function preFilterModelGpu(){
    var resGpu = $('.active-item').map(function(index,element){
    return $(element).attr('data-model');
    });
    var arrGpu = resGpu.get();
    var g=0;
    for (g; g <= arrGpu.length; g++){
        $('.step-type button.'+arrGpu[g]).show();
    }
}
function preFilterAmountGpu(){}
  
    
function conunts(id,count){
    var lastCount = $('span[data-ids='+id+']').attr('data-quant');
    var resPrice = $('.conf-item-price.'+id).html();
    var priceOneCount = Number(resPrice);
    if (count > lastCount){
        var resQ = Number(count) - Number(lastCount);
        var priceChange = priceOneCount * resQ;
        $('span[data-ids='+id+']').attr('data-quant',count);
        totalSummary(priceChange,1);
    }
    if (lastCount > count) {
        var resQ = Number(lastCount) - Number(count);
        var priceChange = priceOneCount * resQ;
        $('span[data-ids='+id+']').attr('data-quant',count);
        var priceMinus = Number(-priceChange)
        totalSummary(priceMinus,1);
    }
     
    //$('span[data-ids='+id+']').attr('data-quant',count);
    $('span[data-ids='+id+']').html('x '+count+' шт.');
}       

function leftbuttonRam(id){
    var count = $('input.'+id).val();
    if(count > 1){
    count--;
    $('input.'+id).val(count);
    var inpEmpty = $('.res-sel-pict img').is('.'+id);
        if (inpEmpty == true){
            conunts(id,count);
        }    
    }
} 
function rightbuttonRam(id){
    var count = $('input.'+id).val();
    if(count < 4){
    count++;
    $('input.'+id).val(count);
        var inpEmpty = $('.res-sel-pict img').is('.'+id);
        if (inpEmpty == true){
            conunts(id,count);
        } 
    }    
}
function leftbutton(id){
    var count = $('input.'+id).val();
    if(count > 1){
    count--;
    $('input.'+id).val(count);
    var inpEmpty = $('.res-sel-pict img').is('.'+id);
        if (inpEmpty == true){
            conunts(id,count);
        }    
    }
} 
function rightbutton(id){
    var count = $('input.'+id).val();
    if(count < 2){
    count++;
    $('input.'+id).val(count);
        var inpEmpty = $('.res-sel-pict img').is('.'+id);
        if (inpEmpty == true){
            conunts(id,count);
        } 
    }    
}  