 function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 15)];
                }
                return color;
            }

            function changeShape() {
                var value = Math.random();
                if (value > 0.5){
                    value = 50;
                }
                else{
                    value = 0;
                }
                return value;
            }

            var createdTime;
            function makeBox(){
                x = Math.random();
                x = x*2000;
                setTimeout(function(){
                    var top = Math.random()
                    top = top*700;

                    var left = Math.random()
                    left = left*1900;

                    document.getElementById("box").style.top = top+ "px";
                    document.getElementById("box").style.left = left+ "px";
                    document.getElementById("box").style.border= changeShape();
                    document.getElementById("box").style.backgroundColor = getRandomColor();
                    document.getElementById("box").style.display = "block";
                    createdTime = Date.now();
                }, x);
                }
            document.getElementById('box').onclick = function(){
                this.style.display ="none";
                makeBox();
                reactionTime = (Date.now() - createdTime)/1000;
                document.getElementById('text').innerHTML = reactionTime;
            }
            makeBox();
