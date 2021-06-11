document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == 163 * 45) {
                    location.assign('./4');
                }
                if (event.keyCode === 13) {
                    if (name == 163 * 45) {
                        location.assign('./4');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);