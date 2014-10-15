$(document).ready(function(){

$('.file-img-user').change(function(){
	if($(this).val() != ''){
		$this = $(this);
		function readURL(input){
			if (input.files && input.files[0]){
				var reader = new FileReader();
				reader.onload = function(e){
					$this.parent().find('img').attr('src', e.target.result);
				}
				reader.readAsDataURL(input.files[0]);
			}
		}
		readURL(this);	
	}
});

$('.competition-tabs-menu a').click(function(){
	$('.competition-tabs-menu a').removeClass('active');
	$(this).addClass('active');
	$('.competition-tab').addClass('hidden');
	$('#' + $(this).data('id')).removeClass('hidden')
});

$('label').click(function(e) {
	e.preventDefault();
	var For = $(this).attr('for');
	$('#' + For).trigger('click');
});

$('.stock-big-wrap').click(function(){
	if($('.stock-big-info').hasClass('hidden')){
		$('.stock-big-info').removeClass('hidden');
	} else {
		$('.stock-big-info').addClass('hidden');
	}
});

$(document).bind('click', function(e){
	var $clicked = $(e.target);
	if (!($clicked.is('.stock-big') || $clicked.parents().is('.stock-big'))){
		$('.stock-big-info').addClass('hidden');
	}
});

// btns info
$('.btn-info').click(function(){
	if($(this).hasClass('btn-info-open')){
		$(this).removeClass('btn-info-open');
		$('#' + $(this).data('id')).stop().slideUp(300);
	} else {
		$(this).addClass('btn-info-open');
		$('#' + $(this).data('id')).stop().slideDown(300);
	}
});

// checkbox
$('.checkbox-big-transparent').ezMark({checkboxCls: 'checkbox-big-transparent', checkedCls: 'checkbox-checked-big-transparent'});
$('.checkbox-big-white').ezMark({checkboxCls: 'checkbox-big-white', checkedCls: 'checkbox-checked-big-white'});
$('.checkbox-transparent').ezMark({checkboxCls: 'checkbox-transparent', checkedCls: 'checkbox-checked-transparent'});
$('.checkbox-white').ezMark({checkboxCls: 'checkbox-white', checkedCls: 'checkbox-checked-white'});
$('.checkbox-white-2').ezMark({checkboxCls: 'checkbox-white-2', checkedCls: 'checkbox-checked-white-2'});

// radio
$('.radio-transparent').ezMark({radioCls: 'radio-transparent', selectedCls: 'radio-checked-transparent'});
$('.radio-white').ezMark({radioCls: 'radio-white', selectedCls: 'radio-checked-white'});

// select
$('select.select-custom').not('.interactive').each(function(index, element){					
	var sb = new SelectBox({
		selectbox: $(this),
		height: 150,
		customScrollbar: true,
		scrollOptions: {
			contentWidth: 0
		}
	});
});

// scroll
$('.scroll-pane').jScrollPane();
$('.chat-scroll').jScrollPane();

// file
$('.filebox').nicefileinput({
	label : 'Прикрепить файл'
});

// login win
$('.key-win').click(function(){
	$('.login-win').show();
});

$(document).bind('click', function(e){
	var $clicked = $(e.target);
	if (!($clicked.is('.login-win') || $clicked.parents().is('.login-win')) && !($clicked.is('.key-win') || $clicked.parents().is('.key-win'))){
		$('.login-win').hide();
	}
});

// login form validate
$("#login-form").validate({		
	rules: {
		email: {
			required: true,
			email: true
		},
		pass: {
			required: true
		}
	},
	messages: {
		email: {
			required: "",
			email: ""
		},
		pass: {
			required: ""
		}
	}
});

$("#registration-form").validate({		
	rules: {
		name: {
			required: true
		},
		email: {
			required: true,
			email: true
		}
	},
	messages: {
		name: {
			required: ""
		},
		email: {
			required: "",
			email: ""
		}
	}
});

$("#recovery-form").validate({		
	rules: {
		email: {
			required: true,
			email: true
		},
		answer: {
			required: true
		}
	},
	messages: {
		email: {
			required: "",
			email: ""
		},
		answer: {
			required: ""
		}
	}
});

$("#login-win-form").validate({		
	rules: {
		email: {
			required: true,
			email: true
		},
		pass: {
			required: true
		}
	},
	messages: {
		email: {
			required: "",
			email: ""
		},
		pass: {
			required: ""
		}
	}
});

$("#my-desire").validate({		
	rules: {
		title: {
			required: true
		},
		description: {
			required: true
		}
	},
	messages: {
		title: {
			required: ""
		},
		description: {
			required: ""
		}
	}
});

$("#question-1").validate({		
	rules: {
		answer: {
			required: true
		}
	},
	messages: {
		answer: {
			required: ""
		}
	}
});

$("#question-2").validate({		
	rules: {
		title: {
			required: true
		},
		description: {
			required: true
		}
	},
	messages: {
		title: {
			required: ""
		},
		description: {
			required: ""
		}
	}
});

$("#meeting").validate({		
	rules: {
		description: {
			required: true
		}
	},
	messages: {
		description: {
			required: ""
		}
	}
});

$("#form-settings").validate({		
	rules: {
		pass1: {
			required: true
		},
		pass2: {
			required: true
		},
		pass3: {
			required: true
		},
		email: {
			required: true,
			email: true
		},
		url: {
			required: true
		}
	},
	messages: {
		pass1: {
			required: 'Заполните поле'
		},
		pass2: {
			required: 'Заполните поле'
		},
		pass3: {
			required: 'Заполните поле'
		},
		email: {
			required: 'Заполните поле',
			email: 'Не верный адрес'
		},
		url: {
			required: 'Заполните поле'
		}
	}
});

// tabs
$('.tabs-menu a').click(function(){
	$('.tabs-menu a').removeClass('active');
	$(this).addClass('active');
	$('.tab').hide();
	$('#' + $(this).data('id')).show();
});

$('.agents > div').click(function(){
	$('.agents > div').removeClass('active');
	$(this).addClass('active');
	$('.agent-box').hide();
	$('#' + $(this).data('id')).show();
	$('.scroll-pane').jScrollPane();
});

$('.menu-grade-left a').click(function(){
	$('.menu-grade-left a').removeClass('active');
	$(this).addClass('active');
	$('.menu-grade-left-box').find('.grade').hide();
	$('#' + $(this).data('id')).show();
	$('.scroll-pane').jScrollPane();
});

$('.menu-grade-right a').click(function(){
	$('.menu-grade-right a').removeClass('active');
	$(this).addClass('active');
	$('.menu-grade-right-box').find('.grade').hide();
	$('#' + $(this).data('id')).show();
	$('.scroll-pane').jScrollPane();
});

$('.title-center').click(function(){
	if(!$('.conclusion-more').hasClass('open')){
		$(this).find('div').text('Скрыть подробную информацию');
		$('.conclusion-more').slideDown(500).addClass('open');
	} else{
		$(this).find('div').text('Показать подробную информацию');
		$('.conclusion-more').slideUp(500).removeClass('open');
	}
});

$('.conclusion-tab-list li').click(function(){
	$('.conclusion-tab-list li').removeClass('active');
	$(this).addClass('active');
	$('.conclusion-tab-box').hide();
	$('#' + $(this).data('id')).show();
	var ul = $(this).parent();
	ul.insertAfter(ul.next());
	return false;	
});

});