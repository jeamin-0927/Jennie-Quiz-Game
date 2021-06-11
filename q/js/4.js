
            document.getElementById('q').focus();
            document.addEventListener('keydown', function (event) {
                const name = document.getElementById('q').value;
                if (name == "서울특별시 강남구 청담동") {
                    location.assign('./5');
                }
                if (event.keyCode === 13) {
                    if (name == "서울특별시 강남구 청담동") {
                        location.assign('./5');
                    }
                    else {
                        location.assign('./../no')
                    }
                };
            }, true);