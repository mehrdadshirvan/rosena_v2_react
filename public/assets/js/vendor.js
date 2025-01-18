console.log('you shouldn\'t be here\n' +
    '\n' +
    'Now that you have come here, if you like, you can apply to be a member of our collection :) \n'+
    '\n' +
    'doctiran.com/employment-applications')


//auto call
checkThemeMode()

function checkIsPrevious(parameter) {
    if (parameter == '« قبلی' || parameter == '&laquo; قبلی' || parameter == '&laquo; Previous' || parameter == 'قبلی' || parameter == 'Previous') {
        return true;
    }
    return false;
}

function checkIsNext(parameter) {
    if (parameter == 'بعدی »' || parameter == 'بعدی &raquo;' || parameter == 'Next &raquo;' || parameter == 'بعدی' || parameter == 'Next') {
        return true;
    }
    return false;
}

function checkHttpStatusCode(code) {

    if (code === 200 || code === 201) {
        return true;
    } else if (code === 403) {
        toastr.error("Access Denied!");
        return false;
    }
    return false;
}

async function axiosGet(url, parameter = null, callback) {
    try {
        let response = await axios.get(url, {params: parameter});
        if (checkHttpStatusCode(response.status)) {
            return callback(response.data)
        } else {
            return false;
        }
    } catch (error) {
        checkHttpStatusCode(error.status)
        if (error?.response?.data?.errors) {
            Object.values(error?.response?.data?.errors).map((item) => toastr.error(item[0]));
        }
    }
}


async function axiosPost(url, body = null, callback) {
    try {
        const res = await axios.post(url, body,{ headers: {
                'Content-Type': 'multipart/form-data'
            }});
        if (checkHttpStatusCode(res.status)) {
            return callback(res.data)
        } else {
            return false;
        }
    } catch (error) {
        checkHttpStatusCode(error.status)
        if (error?.response?.data?.errors) {
            Object.values(error?.response?.data?.errors).map((item) => toastr.error(item[0]));
        }
    }
}


async function axiosDelete(url, body = null, callback) {
    try {
        const res = await axios.delete(url, body);
        if (checkHttpStatusCode(res.status)) {
            return callback(res.data)
        } else {
            return false;
        }
    } catch (error) {
        checkHttpStatusCode(error.status)
        if (error?.response?.data?.errors) {
            Object.values(error?.response?.data?.errors).map((item) => toastr.error(item[0]));
        }
    }
}

function URL_add_parameter(url, param, value) {
    var hash = {};
    var parser = document.createElement('a');

    parser.href = url;

    var parameters = parser.search.split(/\?|&/);

    for (var i = 0; i < parameters.length; i++) {
        if (!parameters[i]) continue;

        var ary = parameters[i].split('=');
        hash[ary[0]] = ary[1];
    }

    hash[param] = value;

    var list = [];
    Object.keys(hash).forEach(function (key) {
        list.push(key + '=' + hash[key]);
    });

    parser.search = '?' + list.join('&');
    return parser.href;
}

function urlAddParameter(parameter, value) {
    history.pushState(null, null, URL_add_parameter(location.href, parameter, value));
}


function getUrlParameter(name,defaultValue = null) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? defaultValue : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        $("#going_to_top_div").fadeIn(500);
    } else {
        $("#going_to_top_div").fadeOut(500);
    }
}

function deleteRow(href, callback) {
    Swal.fire({
        title: "حذف بشه؟",
        text: "برای حذف مورد انتخاب شده روی حذف کلیک کنید!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "نه! حذف نکن",
        confirmButtonText: "حذف",
        customClass: {
            confirmButton: 'btn-danger-v1',
            cancelButton: 'btn-cancel-v1'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            axiosDelete(href, null, function (res) {
                return callback(res);
            })
        } else {

        }
    });
}

function customDelete() {
}

function showMore(id) {
    document.getElementById(id).classList.toggle('d-none');
}

function loadingGif(width = "75%") {
    return "<img src='/assets/panel/images/search.gif' class='d-block m-auto filter_brightness_lighter' width=" + width + "/>";
}

function loadingHtml(width = "50%") {
    return '<div style="width:' + width + '" class="d-block m-auto"><div class="dot-stage"><div class="dot-floating"></div></div></div>';
}

function loadingSpinner(width = "50%", SpinnerSize = '15px', color = 'text-primary') {
    return '<div style="width:' + width + '" class="d-inline m-auto spsp"><div class="spinner-border m-0 ' + color + '" style="width: ' + SpinnerSize + ';height: ' + SpinnerSize + ';" role="status"></div></div>';
}

function scroll_to(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top,
    }, 500);
}

var delayToRun = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

// Get all elements with the class 'justNumber'
var numberInputs = document.querySelectorAll('.justNumber');
numberInputs.forEach(function (input) {
    input.addEventListener('keydown', function (evt) {
        var key = evt.keyCode || evt.which || 0;
        if (key === 8 || // Backspace
            key === 9 || // Tab
            key === 46 || // Delete
            key === 110 || // Numpad decimal point
            key === 190 || // Decimal point
            (key >= 35 && key <= 40) || // Home, End, Left, Right arrow keys
            (key >= 48 && key <= 57) || // Numbers 0-9
            (key >= 96 && key <= 105) // Numpad Numbers 0-9
        ) {
            return;
        }

        evt.preventDefault();
    });
});


function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function onlyNumberKey(evt, allowDecimal = true) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;

    // Allow numeric keys (0-9) and backspace
    if ((ASCIICode >= 48 && ASCIICode <= 57) || ASCIICode === 8) {
        return true;
    }

    // Allow decimal point if enabled and not already present in the input
    if (allowDecimal && ASCIICode === 46 && evt.target.value.indexOf('.') === -1) {
        return true;
    }

    // Disallow other characters
    return false;
}

function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function returnNumberFormat(object) {
    $(object).val(numberFormat($(object).val().replaceAll(',', '')))
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function emptyList(text = 'Empty') {
    return '<div class="alert alert-warning p-3 d-block text-center">' + text + '</div>';
}


function openWindow(url) {
    window.open(url, "Popup", "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=auto, height=auto, top=30");
}

function resetFormById(id) {
    document.getElementById(id).reset();
}

function reloadSelect2() {
    $('select.select2').select2();
    $('select.select2-multiple').select2();
    $("select.select2-tags").select2({tags: true});
}

function CopyToClipboard(TEXT) {
    if (TEXT != undefined || TEXT != null) {
        navigator.clipboard.writeText(TEXT);
        toastr.success('کپی شد');
    }
}

function showLoading(show, tagClass = 'loading') {
    let Loading = $("." + tagClass);
    if (show == false) Loading.addClass('hidden');
    if (show == true) Loading.removeClass('hidden');
}


function checkThemeMode() {
    let mode = localStorage.getItem('theme');
    if (mode && mode === 'dark') {
        document.body.classList.add('dark');
    } else if (mode && mode !== 'dark') {
        document.body.classList.remove('dark');
    }
    if (localStorage.getItem('theme') === 'dark') {
        if (document.getElementById('changeThemeModeBTN'))
            document.getElementById('changeThemeModeBTN').innerHTML = '<i class="fa-solid fa-sun text-orange-500"></i>';
    } else {
        if (document.getElementById('changeThemeModeBTN'))
            document.getElementById('changeThemeModeBTN').innerHTML = '<i class="fa-solid fa-moon text-gray-400"></i>';
    }
}

function changeThemeMode() {
    let mode = localStorage.getItem('theme');
    if (mode) {
        if (mode && mode === 'dark') {
            localStorage.setItem('theme', 'light');
        } else if (mode && mode !== 'dark') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    } else {
        localStorage.setItem('theme', 'dark');
    }

    if (localStorage.getItem('theme') === 'dark') {
        if (document.getElementById('changeThemeModeBTN'))
            document.getElementById('changeThemeModeBTN').innerHTML = '<i class="fa-solid fa-sun text-orange-500"></i>';
    } else {
        if (document.getElementById('changeThemeModeBTN'))
            document.getElementById('changeThemeModeBTN').innerHTML = '<i class="fa-solid fa-moon text-gray-400"></i>';
    }

    checkThemeMode();
}


function checkLogoByThemeMode() {
    if (localStorage.getItem('theme') === 'dark') {
        return '/assets/images/logo-dark.png';
    } else {
        return '/assets/images/logo-light.png';
    }
}


// document.addEventListener('DOMContentLoaded', function () {
//     const progressBar = {
//         settings: {
//             color: '#2299DD',
//             initialPosition: 0.08,
//             crawlSpeed: 200,
//             height: 3,
//             crawl: true,
//             showSpinner: true,
//             speed: 200,
//         },
//
//         bar: document.querySelector('#progress-bar'),
//         progress: 0,
//         isLoading: false,
//
//         start() {
//             if (this.isLoading) return;
//
//             this.isLoading = true;
//             this.progress = this.settings.initialPosition;
//             this.bar.classList.add('loading');
//             this.updateProgress();
//
//             if (this.settings.crawl) {
//                 this.crawl();
//             }
//         },
//
//         updateProgress() {
//             const barElement = this.bar.querySelector('.bar');
//             barElement.style.width = `${this.progress * 100}%`;
//         },
//
//         crawl() {
//             if (!this.isLoading) return;
//
//             setTimeout(() => {
//                 const remaining = 1 - this.progress;
//                 const increment = remaining * 0.1;
//                 this.progress = Math.min(this.progress + increment, 0.994);
//                 this.updateProgress();
//
//                 if (this.isLoading) {
//                     this.crawl();
//                 }
//             }, this.settings.crawlSpeed);
//         },
//
//         done() {
//             this.progress = 1;
//             this.updateProgress();
//
//             setTimeout(() => {
//                 this.bar.classList.remove('loading');
//                 this.isLoading = false;
//                 this.progress = 0;
//             }, this.settings.speed);
//         }
//     };
//
//     // Listen for page navigation events
//     document.addEventListener('click', function (e) {
//         const link = e.target.closest('a');
//         if (link && link.href && !link.target && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
//             progressBar.start();
//         }
//     });
//
//     // For forms
//     document.addEventListener('submit', function (e) {
//         if (e.target.tagName === 'FORM') {
//             progressBar.start();
//         }
//     });
//
//     // When page loads completely
//     window.addEventListener('load', function () {
//         progressBar.done();
//     });
//
//     // Expose to window for manual control
//     window.progressBar = progressBar;
// });

function empty(value) {
    return value <= 0
        || value === 0
        || value === undefined
        || value === ''
        || value === null
        || isNaN(value)
        || value === 'NaN';
}
