document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == "검은색" || name == "검정" || name == "검은" || name == "검정색") {
                    location.assign('./end');
                }
                if (event.keyCode === 13) {
                    if (name == "검은색" || name == "검정" || name == "검은" || name == "검정색") {
                        location.assign('./end');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);