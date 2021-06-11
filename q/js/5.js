document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == "예전에 내가 했던 말을 기억했다가 해줄 때") {
                    location.assign('./6');
                }
                if (event.keyCode === 13) {
                    if (name == "예전에 내가 했던 말을 기억했다가 해줄 때") {
                        location.assign('./6');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);