$(document).ready(function() {
    const submit = document.querySelector('button#submit');

    const inputName = document.querySelector('input[name="name"]');
    const inputNumber = document.querySelector('input[name="number"]');
    const inputMonth = document.querySelector('input[name="month"]');
    const inputYear = document.querySelector('input[name="year"]');
    const inputCvc = document.querySelector('input[name="cvc"]');

    const errorMessageName = $('span.messageName');
    const errorMessageNumber = $('span.messageNumber');
    const errorMessageInvalidNumber = $('span.messageInvalidNumber');
    const errorMessageDate = $('span.messageDate');
    const errorMessageInvalidMonth = $('span.messageInvalidMonth');
    const errorMessageInvalidYear = $('span.messageInvalidYear');
    const errorMessageCvc = $('span.messageCvc');
    const errorMessageInvalidCvc = $('span.messageInvalidCvc');

    submit.addEventListener('click', validate);

    function setDefaultClass() {
        errorMessageName.removeClass('d-block').addClass('d-none');
        errorMessageNumber.removeClass('d-block').addClass('d-none');
        errorMessageInvalidNumber.removeClass('d-block').addClass('d-none');
        errorMessageInvalidMonth.removeClass('d-block').addClass('d-none');
        errorMessageInvalidYear.removeClass('d-block').addClass('d-none');
        errorMessageDate.removeClass('d-block').addClass('d-none');
        errorMessageCvc.removeClass('d-block').addClass('d-none');
        errorMessageInvalidCvc.removeClass('d-block').addClass('d-none');
    }

    $('input[name="number"]').on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
        let ccnum = $(this).val();
        let ccnumspaced = ccnum.match(/.{1,4}/g);
        $(this).val(ccnumspaced.join(' '));
    });

    $('input[name="month"]').on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
    $('input[name="year"]').on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    $('input[name="cvc"]').on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
    
    function validate(e) {
        e.preventDefault();
        
        const date = new Date();
        let valid = true;
        setDefaultClass();
        
        if(!inputName.value) {
            errorMessageName.removeClass('d-none');
            errorMessageName.addClass('d-block');
            valid = false;
        }
        
        if(!inputNumber.value) {
            errorMessageNumber.removeClass('d-none');
            errorMessageNumber.addClass('d-block');
            valid = false;
        } else if (inputNumber.value.length < 19) {
            errorMessageInvalidNumber.removeClass('d-none');
            errorMessageInvalidNumber.addClass('d-block');
            valid = false;
        }
        
        if(!inputMonth.value || !inputYear.value) {
            errorMessageDate.removeClass('d-none');
            errorMessageDate.addClass('d-block');
            errorMessageInvalidMonth.removeClass('d-block');
            errorMessageInvalidMonth.addClass('d-none');
            valid = false;
        } else if (parseInt(inputMonth.value) > 12 || inputMonth.value == 0) {
            errorMessageInvalidMonth.removeClass('d-none');
            errorMessageInvalidMonth.addClass('d-block');
        } else if (parseInt(inputYear.value) < parseInt(date.getFullYear().toString().substring(2,4))) {
            errorMessageInvalidYear.removeClass('d-none');
            errorMessageInvalidYear.addClass('d-block');
        }
        
        if(!inputCvc.value) {
            errorMessageCvc.removeClass('d-none');
            errorMessageCvc.addClass('d-block');
            valid = false;
        } else if (inputCvc.value.length < 3) {
            errorMessageInvalidCvc.removeClass('d-none');
            errorMessageInvalidCvc.addClass('d-block');
            valid = false;
        }

        if(valid === true) {
            $('form.client-data').hide();
            $('div.success').show();
        }
        
        return valid;
    }

});