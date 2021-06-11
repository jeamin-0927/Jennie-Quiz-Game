document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == "19960116") {
                    location.assign('./10');
                }
                if (event.keyCode === 13) {
                    if (name == "19960116") {
                        location.assign('./10');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);