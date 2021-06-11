document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == '김제니') {
                    location.assign('./3');
                }
                if (event.keyCode === 13) {
                    if (name == '김제니') {
                        location.assign('./3');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);