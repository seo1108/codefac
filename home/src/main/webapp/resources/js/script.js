/*
 * Title:   bz9tbe
 * Author:  JRBthemes
 */

(function ($) {
    'use strict';
    var menuMobileList = function () {
        if ($('.menu-item-has-children').length) {
            $('.menu-mobi li.menu-item-has-children').children('a').append(function () {
                return '<button class="dropdown-expander"><i class="fa fa-angle-right"></i></button>';
            });
            $('.menu-mobi .dropdown-expander').on('click', function () {
                $(this).parent().parent().children('.sub-menu').slideToggle();
                $(this).find('i').toggleClass('fa fa-angle-right fa fa-angle-down');
                $(this).parent('a').parent('li').toggleClass('active');
                return false;
            });
        }
    }
    function revolutionSlider() {
        if ($('#slider').length) {
            jQuery("#slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 6000,
                navigation: {
                    onHoverStop: "on",
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 975,
                        style: "hermes",
                        hide_onleave: false,
                        direction: "horizontal",
                        container: "layergrid",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 7,
                        tmp: ''
                    }
                },
                responsiveLevels: [1920, 1199, 991, 751, 481],
                gridwidth: [1200, 980],
                gridheight: [884, 690, 590, 590, 1485]
            });
        }
    }
    var menuMobile = function () {
        $(".header .menu-bars-mobi").on('click', function () {
            $(this).toggleClass("open");
            $('.menu-mobi').slideToggle();
            return false;
        });
    }
    var Backtotop = function () {
        if ($('.bz9tbe-scroll-top').length) {
            var scrollTrigger = 500, // px
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.bz9tbe-scroll-top').addClass('show-icon-top');
                        } else {
                            $('.bz9tbe-scroll-top').removeClass('show-icon-top');
                        }
                    };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.bz9tbe-scroll-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }
    var autoinput = function () {
        var options = {
            data: [{civilite: "Atlanta de Kalb Peachtree", prenom: "PDK", nom: "출발지"},
                {civilite: "Hartsfield-Jackson Atlanta", prenom: "ATL", nom: "출발지"},
                {civilite: "Edmonton International", prenom: "XNA", nom: "출발지"},
                {civilite: "McCarran International", prenom: "FYV", nom: "출발지"},
                {civilite: "Fayetteville Municipal", prenom: "DFW", nom: "출발지"},
                {civilite: "Abu Dhabi Bateen Apt", prenom: "MEX", nom: "출발지"},
                {civilite: "Jorge Newbery Airport", prenom: "AZI", nom: "출발지"},
                {civilite: "Barcelona-El Prat Airport", prenom: "BCN", nom: "출발지"},
                {civilite: "Dallas/Fort Worth", prenom: "CWA", nom: "출발지"},
                {civilite: "Central Wisconsin Airport", prenom: "MEX", nom: "출발지"},
                {civilite: "Central Wisconsin Airport", prenom: "CWA", nom: "출발지"},
            ],
            getValue: "civilite",
            template: {
                type: "custom",
                method: function (value, item) {
                    return "<span class='s-1'>" + value + "</span> <span class='s-2'>(" + item.prenom + ")</span>  <span class='s-3'>" + item.nom + '</span>';
                }
            },
            list: {
                match: {
                    enabled: true
                }
            },
            theme: "square"
        };
        if ($('.autocomplete').length) {
            jQuery(".autocomplete").easyAutocomplete(options);
        }
    }
    var datetimepicker = function () {
        var date1 = new Date();
        var dd = date1.getDate();
        var mm = date1.getMonth() + 1;
        var yyyy = date1.getFullYear();
        var todayDate = yyyy + "/" + mm + "/" + dd;
        if ($('.datetimepicker').length) {
            jQuery('.datetimepicker').datetimepicker({
                format: 'YYYY.MM.DD',
                minDate: "2017-01-10",
                maxDate: todayDate
            });
        }
    }
    var customSelect = function () {
        if ($('.custom-select').length) {
            $('.custom-select').each(function () {
                var classes = $(this).attr('class');
                var template = '<div class="' + classes + '">';
                template += '<span class="custom-select-trigger">' + $(this).attr('data-placeholder') + '</span>';
                template += '<div class="custom-options">';
                $(this).find('option').each(function () {
                    template += '<span class="custom-option ' + $(this).attr('class') + '" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
                });
                template += '</div></div>';
                $(this).wrap('<div class="custom-select-wrapper"></div>');
                $(this).hide();
                $(this).after(template);
            });
            $('.custom-option:first-of-type').hover(function () {
                $(this).parents('.custom-options').addClass('option-hover');
            }, function () {
                $(this).parents('.custom-options').removeClass('option-hover');
            });
            $('.custom-select-trigger').on('click', function (ev) {
                $('html').one('click', function () {
                    $('.custom-select').removeClass('opened');
                });
                $(this).parents('.custom-select').toggleClass('opened');
                ev.stopPropagation();
            });
            $('.custom-option').on('click', function () {
                $(this).parents('.custom-select-wrapper').find('select').val($(this).data('value'));
                $(this).parents('.custom-options').find('.custom-option').removeClass('selection');
                $(this).addClass('selection');
                $(this).parents('.custom-select').removeClass('opened');
                $(this).parents('.custom-select').find('.custom-select-trigger').text($(this).text());
            });
        }
    }
    var showContentFaqs = function () {
        if ($('.content-faq').length) {
            $('.content-faq .box-faq ').on('click', function () {
                if ($(this).hasClass("active")) {
                    $(this).children('.toggle').slideUp();
                    $(this).removeClass('active');
                } else {
                    $(this).children('.toggle').slideDown();
                    $(this).addClass('active');
                }
            });
        }
    }
    jQuery(document).ready(function ($) {
        menuMobileList();
        menuMobile();
        Backtotop();
        autoinput();
        datetimepicker();
        revolutionSlider();
        customSelect();
        showContentFaqs();
        if ($('.owl-clients').length) {
            $('.owl-clients').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dot: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        }
        $('.qc-custom-select.boxmail .custom-select-wrapper .custom-options .custom-option').on('click', function () {
            var mail = $('#selectList').val();
            $('#boxmail').val(mail);
        });
        $('input[name="radio6"]').change(function () {
            var manageradiorel = $('input[name="radio6"]:checked').val();
            if (manageradiorel == 2) {
                $('.checkfalse').prop('checked', true);
                return false;
            } else {
                $('.checktrue').prop('checked', true);
                return false;
            }
        });
        $('.formstep3 input[name="radio"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 1) {
                $(".formstep3 .boxradio-2").css("display", "block");
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-4").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "none");
            } else if (radio == 2) {
                $(".formstep3 .boxradio-2").css("display", "block");
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-4").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "none");
            } else {
                $(".formstep3 .boxradio-2").css("display", "block");
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-4").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "none");
            }
        });
        $('.formstep3 input[name="radio2"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 1) {
                $(".formstep3 .boxradio-5").css("display", "block");
            } else if (radio == 2) {
                $(".formstep3 .boxradio-4").css("display", "block");
            } else {
                $(".formstep3 .boxradio-3").css("display", "block");
            }
        });
        $('.formstep3 input[name="radio4"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 2) {
                $(".formstep3 .boxradio-5").css("display", "block");
            }
        });
        $('.formstep3 input[name="radio3"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 3) {
                $(".formstep3 .boxradio-5").css("display", "block");
            }
        });
        $('.formstep3 input[name="radio5"]').change(function () {
            $(".formstep3 .action-button").css("pointer-events", "visible");
        });
        $('.formstep3.korean input[name="radio"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 1) {
                $(".formstep3 .boxradio-2").css("display", "block");
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-4").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "none");
                $(".formstep3 .action-button").css("pointer-events", "none");
            } else {
                $(".formstep3 .boxradio-2").css("display", "block");
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-4").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "none");
                $(".formstep3 .action-button").css("pointer-events", "none");
            }
        });
        $('.formstep3.korean input[name="radio2"]').change(function () {
            var radio = $('input[name="radio"]:checked').val();
            if (radio == 1) {
                $(".formstep3 .boxradio-5").css("display", "block");
            } else {
                $(".formstep3 .boxradio-3").css("display", "none");
                $(".formstep3 .boxradio-5").css("display", "block");
            }
        });
    });
    jQuery(window).scroll(function ($) {
        if (jQuery(window).scrollTop() >= 40) {
            jQuery('.header-v1 .header').addClass('fixed-header');
            jQuery('.header-v1 .menu-mobi').addClass('fixed-menu-mobi');
        } else {
            jQuery('.header-v1 .header').removeClass('fixed-header');
            jQuery('.header-v1 .menu-mobi').removeClass('fixed-menu-mobi');
        }
    });
    jQuery(document).ready(function ($) {
        $('.formstep5 .box-title').on('click', function () {
            if ($(this).hasClass("active")) {
                $(this).parent().children('.box-toggle').slideUp();
                $(this).removeClass('active');
            } else {
                $(this).parent().children('.box-toggle').slideDown();
                $(this).addClass('active');
            }
        });
        $('.formstep1 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input[type="text"]').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep2 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input.val').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep3 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep4 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input[type="text"]').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep5 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input[type="text"]').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep6 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input[type="text"]').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $('.formstep7 .next.action-button').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;
            parent_fieldset.find('input[type="text"]').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if (next_step) {
                var next_fs;
                next_fs = jQuery(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }
        });
        $(".previous").click(function () {
            var current_fs;
            current_fs = $(this).parent().parent();
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            $(this).parents('fieldset').fadeOut(400, function () {
                $(this).prev().fadeIn();
            });
        });
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".formstep1 .input_fields_wrap"); //Fields wrapper
        var add_button = $(".formstep1 .add_field_button"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-input input-remove"><input type="text" name="mytext[]" class="input autocomplete" placeholder="Connecting flights"/><a href="#" class="remove_field" >X</a></div>'); //add input box
            }
            autoinput();
        });
        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        })
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".formstep2 .input_fields_wrap"); //Fields wrapper
        var add_button = $(".formstep2 .add_field_button"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-input"><div class="box-1 clearfix"><div class="form-group"><label class="control-label">출발지</label><input type="text" name="Destination" class="autocomplete" placeholder="Destination Airport"></div><div class="form-group"><label class="control-label">출발지</label><input type="text" name="Destination2" class="autocomplete" placeholder="Destination Airport"> </div> </div><div class="box-2 clearfix"><div class="form-group"><label class="control-label">출발지</label><input type="text" name="desformstep2"></div><div class="form-group"><label class="control-label">항공편</label><input type="text" name="desformstep23"></div><div class="form-group"><label class="control-label">출발일</label><input type="text" name="desformstep24" class="datetimepicker"></div></div><a href="#" class="remove_field" >X</a></div>'); //add input box
            }
            autoinput();
            datetimepicker();
        });
        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        })
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".formstep6 .input_fields_wrap"); //Fields wrapper
        var add_button = $(".formstep6 .add_field_button"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-input clearfix"><div class="form-group"><label class="control-label">한글 이름</label><input type="text"  placeholder="홍길동"></div><div class="form-group"><label class="control-label">영문 이름 (여권 상 영문이름) </label><input type="text"  placeholder="HONG/GILDONG"></div><div class="form-group box-hinden"><label class="control-label">Email 주소</label><input type="text"  placeholder=""></div><div class="form-group box-hinden">@</div><div class="form-group box-hinden clearfix"><label class="control-label"></label><input type="text" id="boxmail" placeholder=""><div class="qc-custom-select boxmail"><select class="custom-select sources" name="boxmail" id="selectList" data-placeholder="선택하세요"><option value="Hotmail.com">Hotmail.com</option><option value="Naver.com">Naver.com</option><option value="Gmail.com">Gmail.com</option><option value="Outlook.com">Outlook.com</option><option value="Hanmail.com">Hanmail.com</option><option value="Nate.com">Nate.com</option><option value="Korea.com">Korea.com</option></select></div></div><div class="form-group"><label class="box-checkbox">일행분이 미성년자인 경우 표시해주세요.<input type="checkbox" class="checkboxval"><span class="checkmark"></span></label></div><a href="#" class="remove_field" >X</a></div>'); //add input box
            }
            customSelect();
            $('.box-checkbox .checkboxval').on('click', function () {
                var checkbox = $(this).prop('checked');
                if (checkbox) {
                    $(this).parent().parent().parent().children('.box-hinden').css("display", "none");
                } else {
                    $(this).parent().parent().parent().children('.box-hinden').css("display", "block");
                }
            });
            $('.qc-custom-select.boxmail .custom-select-wrapper .custom-options .custom-option').on('click', function () {
                var mail = $(this).parent().parent().parent().children('#selectList').val();
                $(this).parent().parent().parent().parent().parent().children('#boxmail').val(mail);
            });
        });
        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        })
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".list-compensation .input_fields_wrap1"); //Fields wrapper
        var add_button = $(".list-compensation .add_field_button1"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            $(this).removeClass("active")
            $(".list-compensation .remove_field1").addClass("active");
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-add"><ul><li><span>출발</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>도착</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>사유</span> 기체결함</li></ul><a href="http://airlaw.jidevexperts.com/newindex.html" class="button">배상신청하기</a></div>'); //add input box
            }
        });
        $(".list-compensation").on("click", ".remove_field1", function (e) { //user click on remove text
            $(this).removeClass("active")
            $(".list-compensation .add_field_button1").addClass("active");
            e.preventDefault();
            $(".list-compensation .input_fields_wrap1 .box-add").remove();
            x--;
        })
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".list-compensation .input_fields_wrap2"); //Fields wrapper
        var add_button = $(".list-compensation .add_field_button2"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            $(this).removeClass("active")
            $(".list-compensation .remove_field2").addClass("active");
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-add"><ul><li><span>출발</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>도착</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>사유</span> 기체결함</li></ul><a href="http://airlaw.jidevexperts.com/newindex.html" class="button">배상신청하기</a></div>'); //add input box
            }
        });
        $(".list-compensation").on("click", ".remove_field2", function (e) { //user click on remove text
            $(this).removeClass("active")
            $(".list-compensation .add_field_button2").addClass("active");
            e.preventDefault();
            $(".list-compensation .input_fields_wrap2 .box-add").remove();
            x--;
        })
    });
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".list-compensation .input_fields_wrap3"); //Fields wrapper
        var add_button = $(".list-compensation .add_field_button3"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) { //on add input button click
            $(this).removeClass("active")
            $(".list-compensation .remove_field3").addClass("active");
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                $(wrapper).append('<div class="box-add"><ul><li><span>출발</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>도착</span> 예정 : 10/11/2018 오전 06:30 <i class="fa fa-angle-right"></i> 실제 : 10/11/2018 오전 06:55</li><li><span>사유</span> 기체결함</li></ul><a href="http://airlaw.jidevexperts.com/newindex.html" class="button">배상신청하기</a></div>'); //add input box
            }
        });
        $(".list-compensation").on("click", ".remove_field3", function (e) { //user click on remove text
            $(this).removeClass("active")
            $(".list-compensation .add_field_button3").addClass("active");
            e.preventDefault();
            $(".list-compensation .input_fields_wrap3 .box-add").remove();
            x--;
        })
    });
})(jQuery);
(function ($) {

    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
            isIE = /msie/i.test(navigator.userAgent);
    $.fn.customFile = function () {

        return this.each(function () {

            var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
                    $wrap = $('<div class="file-upload-wrapper">'),
                    $input = $('<input type="text" class="file-upload-input" />'),
                    // Button that will be used in non-IE browsers
                    $button = $('<button type="button" class="file-upload-button">첨부파일</button>'),
                    // Hack for IE
                    $label = $('<label class="file-upload-button" for="' + $file[0].id + '">첨부파일</label>');
            // Hide by shifting to the left so we
            // can still trigger events
            $file.css({
                position: 'absolute',
                left: '-9999px'
            });
            $wrap.insertAfter($file)
                    .append($file, $input, (isIE ? $label : $button));
            // Prevent focus
            $file.attr('tabIndex', -1);
            $button.attr('tabIndex', -1);
            $button.click(function () {
                $file.focus().click(); // Open dialog
            });
            $file.change(function () {

                var files = [], fileArr, filename;
                // If multiple is supported then extract
                // all filenames from the file array
                if (multipleSupport) {
                    fileArr = $file[0].files;
                    for (var i = 0, len = fileArr.length; i < len; i++) {
                        files.push(fileArr[i].name);
                    }
                    filename = files.join(', ');
                    // If not supported then just take the value
                    // and remove the path to just show the filename
                } else {
                    filename = $file.val().split('\\').pop();
                }

                $input.val(filename) // Set the value
                        .attr('title', filename) // Show filename in title tootlip
                        .focus(); // Regain focus
                $(".delete-icon").css("opacity", "1");
            });
            $(document).on('click', '.delete-icon', function () {
                var $el = $('#file');
                $el.wrap('<form>').closest('form').get(0).reset();
                $el.unwrap();
                $input.val('')
                $(".delete-icon").css("opacity", "0");
            });
            $input.on({
                blur: function () {
                    $file.trigger('blur');
                },
                keydown: function (e) {
                    if (e.which === 13) { // Enter
                        if (!isIE) {
                            $file.trigger('click');
                        }
                    } else if (e.which === 8 || e.which === 46) { // Backspace & Del
                        // On some browsers the value is read-only
                        // with this trick we remove the old input and add
                        // a clean clone with all the original events attached
                        $file.replaceWith($file = $file.clone(true));
                        $file.trigger('change');
                        $input.val('');
                    } else if (e.which === 9) { // TAB
                        return;
                    } else { // All other keys
                        return false;
                    }
                }
            });
        });
    };
    // Old browser fallback
    if (!multipleSupport) {
        $(document).on('change', 'input.customfile', function () {

            var $this = $(this),
                    // Create a unique ID so we
                    // can attach the label to the input
                    uniqId = 'customfile_' + (new Date()).getTime(),
                    $wrap = $this.parent(),
                    // Filter empty input
                    $inputs = $wrap.siblings().find('.file-upload-input')
                    .filter(function () {
                        return !this.value
                    }),
                    $file = $('<input type="file" id="' + uniqId + '" name="' + $this.attr('name') + '"/>');
            // 1ms timeout so it runs after all other events
            // that modify the value have triggered
            setTimeout(function () {
                // Add a new input
                if ($this.val()) {
                    // Check for empty fields to prevent
                    // creating new inputs when changing files
                    if (!$inputs.length) {
                        $wrap.after($file);
                        $file.customFile();
                    }
                    // Remove and reorganize inputs
                } else {
                    $inputs.parent().remove();
                    // Move the input so it's always last on the list
                    $wrap.appendTo($wrap.parent());
                    $wrap.find('input').focus();
                }
            }, 1);
        });
    }
    $('input[type=file]').customFile();
}(
        jQuery));

