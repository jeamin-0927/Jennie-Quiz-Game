document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == "붐바야 휘파람") {
                    location.assign('./8');
                }
                if (event.keyCode === 13) {
                    if (name == "붐바야 휘파람") {
                        location.assign('./8');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);