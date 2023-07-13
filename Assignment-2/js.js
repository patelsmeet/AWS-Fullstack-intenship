$("#contactForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Please enter your name",
            minlength: jQuery.validator.format("Please enter at least {0} characters")
        },
        email: {
            required: "Please enter your email",
            email: "Please enter a valid email address"
        },
        phone: {
            required: "Please enter your phone number",
            number: "Please enter a valid phone number",
            minlength: jQuery.validator.format("Please enter at least {0} digits"),
            maxlength: jQuery.validator.format("Please enter no more than {0} digits")
        },
        subject: {
            required: "Please enter the subject"
        },
        message: {
            required: "Please enter your message"
        }
    },
    submitHandler: function(form) {
        form.submit();
    }
});
