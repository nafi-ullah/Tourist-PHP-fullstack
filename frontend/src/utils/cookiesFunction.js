export function setCookie(name, value, days) {
    if (typeof window !== 'undefined') {
        // Client-side
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    } else {
        // Server-side
        console.log("Cannot set cookie on server side in Next.js");
    }
}

export function getCookie(name, context) {
    if (typeof window !== 'undefined') {
        // Client-side
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    } else {
        // Server-side
        if (context && context.req && context.req.headers.cookie) {
            var cookies = context.req.headers.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length + 1);
                }
            }
        }
        return null;
    }
}

export function eraseCookie(name) {
    if (typeof window !== 'undefined') {
        // Client-side
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
        // Server-side
        console.log("Cannot erase cookie on server side in Next.js");
    }
}
