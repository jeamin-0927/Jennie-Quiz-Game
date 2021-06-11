document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name.toLowerCase() == "square one") {
                    location.assign('./9');
                }
                if (event.keyCode === 13) {
                    if (name.toLowerCase() == "square one") {
                        location.assign('./9');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);