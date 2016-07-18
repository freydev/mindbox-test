(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var _ReactDOM = ReactDOM;
        var render = _ReactDOM.render;
        var findDOMNode = _ReactDOM.findDOMNode;

        ////////////////////////////////////////////////////////////
        // Разрешено менять только этот компонент!

        var AutoScroll = function (_React$Component) {
            _inherits(AutoScroll, _React$Component);

            function AutoScroll() {
                _classCallCheck(this, AutoScroll);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(AutoScroll).apply(this, arguments));
            }

            _createClass(AutoScroll, [{
                key: "getBorderWidth",
                value: function getBorderWidth() {
                    var style = document.defaultView.getComputedStyle(this.node);
                    return (parseInt(style.borderTopWidth) || 0) + (parseInt(style.borderBottomWidth) || 0);
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.node = findDOMNode(this);
                }
            }, {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                    if (this.scrollToEnd) this.node.scrollTop = this.node.scrollHeight;
                }
            }, {
                key: "componentWillUpdate",
                value: function componentWillUpdate() {
                    this.scrollToEnd = this.node.scrollHeight + this.getBorderWidth() - (this.node.offsetHeight + this.node.scrollTop) <= this.props.buffer;
                }
            }, {
                key: "render",
                value: function render() {
                    return this.props.children;
                }
            }]);

            return AutoScroll;
        }(React.Component);

        // Разрешено менять только компонент сверху!
        ////////////////////////////////////////////////////////////


        AutoScroll.propTypes = {
            // Количество пикселов, которое должен игнорировать автоскролл
            buffer: React.PropTypes.number
        };

        var App = function (_React$Component2) {
            _inherits(App, _React$Component2);

            function App() {
                var _Object$getPrototypeO;

                var _this2, _ret;

                _classCallCheck(this, App);

                var _temp;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = { lines: [] }, _temp), _possibleConstructorReturn(_this2, _ret);
            }

            _createClass(App, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                    var _this3 = this;

                    streamLines(function (line) {
                        _this3.setState({
                            lines: _this3.state.lines.concat([line])
                        });
                    });
                }
            }, {
                key: "render",
                value: function render() {
                    var lines = this.state.lines;

                    return React.createElement('div', null, React.createElement('h1', null, 'Mindbox Test'), React.createElement(AutoScroll, { buffer: 50 }, React.createElement('ul', { style: {
                            height: '300px',
                            border: '1px solid',
                            overflow: 'auto'
                        } }, lines.map(function (line, index) {
                        return React.createElement('li', { key: index }, line);
                    }))));
                }
            }]);

            return App;
        }(React.Component);

        ////////////////////////////////////////////////////////////


        var streamLines = function streamLines(cb) {
            var lines = script.split('\n').filter(function (l) {
                return l.trim() != '';
            });

            var notify = function notify() {
                if (lines.length) {
                    cb(lines.shift());
                    setTimeout(notify, Math.random() * 1500);
                }
            };

            notify();
        };

        var script = "\nUpon entering the theater, futuristic music sets the mood. A cast member reminds guests that no food, drink or flash photography is allowed and to put on their 3D glasses. The lights dim, a view of the universe appears and a meteorite spins closer and closer to the audience.\n\nMale Announcer: The cosmos: a universe of good and evil where a small group struggles to bring freedom to the countless worlds of despair; a rag-tag band led by the infamous Captain EO.\n\nEO’s spaceship blasts the meteorite into pieces and then soars into the picture on its way to a nearby planet. On board, the ship’s navigator appear. The creature, known as The Geex, has two heads – one named Idy and the other Ody.\n\nOdy: This planet doesn’t look so dangerous, Idy.\n\nIdy: Is this it, Ody?\n\nOdy: We’ll see.\n\nIdy: Ohh.\n\nOdy: We better find that landing beacon.\n\nIdy: Hey, Hooter, we’re almost there!\n\nHooter: (Blows trunk) Oh, boy!\n\nMajor Domo: Don’t get too close or you’ll trip their intrusion alarm.\n\nHooter: Yeah, don’t blow it you guys.\n\nOdy: Relax, there’s no problem.\n\nIdy: No problem. (Buzzer goes off.) INTRUSION ALERT!!!\n\nOdy: Battle alert!\n\nIdy: Battle alert!!\n\nMinor Domo folds his robotic arms in and ducks behind something.\n\nMajor Domo: Don’t panic! That’s what got us into trouble the last time.\n\nOdy: It wasn’t our fault. It was Hooter’s fault.\n\nIdy: Right, Hooter’s fault.\n\nHooter blows air out of his trunk right at Idy and Ody.\n\nIdy: Oh, Hooter!\n\nWhistle goes off.\n\nMajor Domo: Straighten up men. It’s the Captain.\n\nCaptain EO rises up on an elevator platform into the cabin.\n\nMinor Domo: Good morning, Captain.\n\nMajor Domo: It looks like we tripped their intrusion alarm, sir.\n\nHooter: Idy and Ody blew it. They got too close.\n\nCaptain EO: We’re goin’ in.\n\nMajor Domo: Sir, the ship is in absolutely no condition to go into battle. I thought we’d begin by cleaning up Hooter’s bunk.\n\nHooter throws a can across the cabin.\n\nCaptain EO: Hooter! Listen! The Command considers us a bunch of losers. But we’re gonna do it right this time, ’cause we’re the best. We don’t we’ll be drummed out of the corps.\n\nMajor Domo: We won’t let you down this time, Captain.\n\nOdy: We’re going to do it right.\n\nIdy: That’s right, we’ll be perfect, sir.\n\nHooter makes noise in agreement and salutes.\n\nCaptain EO: OK. (Salutes Hooter back.)\n\nIdy: Captain, there’s something weird out there.\n\nOdy: A patrol ship.\n\nCaptain EO: I thought so. Maybe we can outrun him.\n\nThe enemy patrol ship roars by.\n\nIdy: It’s going to ram us!\n\nOdy: Duck!\n\nCaptain EO: (Grabs control of the ship) Get to your stations!\n\nEO’s ship flips underneath the patrol ship, dodging it and its laser guns. Minor Domo is sent flying across the cabin into Major Domo (leaving a dent in Major Domo’s metallic back). Hooter is thrown onto his bunk. The patrol ship turns around and hits EO’s ship with its laser gun.\n\nCaptain EO: Hold on, everybody, hold on!\n\nMajor Domo: We haven’t found the landing beacon yet.\n\nCaptain EO: Somebody get the map. Where’s the map?!\n\nIdy: Who’s got the map?\n\nOdy: Fuzzball.\n\nFuzzball: (Chirps) Hooter has it. (Points in Hooter’s direction.)\n\nMajor Domo: Hooter has it!\n\nCaptain EO: Hooter!\n\nHooter: I think I ate it!\n\nIdy & Ody: You ate it!\n\nThe chase continues with EO’s ship nearing the planet. EO’s Commander appears on a holographic screen.\n\nCommander Bog: Captain EO?! You down there, EO?\n\nCaptain EO: Commander Bog.\n\nCommander Bog: Captain EO, you are late reporting in. Are you having a problem finding our landing beacon?\n\nCaptain EO: No, sir. Everything’s under control, sir!\n\nCommander Bog looks around and sees the ship in disarray.\n\nCommander Bog: What’s going on?\n\nCaptain EO: We’re having a slight weapons malfunction, sir.\n\nCommander Bog: Captain EO, have you engaged in combat against orders?!\n\nHooter throws something at the screen and covers the Commander’s eyes.\n\nCommander Bog: I can’t see! Captain EO, what’s going on?\n\nCaptain EO: Woohoo!\n\nThe ship flies down in between buildings on the planet and approaches a tunnel.\n\nIdy: We’re going through.\n\nOdy: No! Idy, the sail’s not in.\n\nCaptain EO: Hooter, bring in the sail!\n\nHooter: OK.\n\nCaptain EO: It’s right behind you, Hooter.\n\nHooter: I can’t reach it.\n\nCommander Bog: What’s going on? (The yellow substance that Hooter threw onto Commander Bog’s eyes begins to wear off.)\n\nCaptain EO: Somebody push the red button.\n\nMajor Domo: Use your trunk, Hooter.\n\nIdy: Come on, Hooter. Stretch!\n\nHooter jumps and hits the button which brings the sail in just in time. EO’s ship flies right through the tunnel without being hit by the patrol ship’s weapons.\n\nCaptain EO: Wu!\n\nEveryone cheers with relief. They’re not clear yet, though. EO must navigate the ship through a series of tight spaces.\n\nOdy: We’re losing power.\n\nCaptain EO: Everybody hold on!\n\nThe ship crashes and smoke is released into the theater. Major Domo shines a light throughout the cabin to inspect the damage. Captain EO is laying on the floor with small pieces of debris on him.\n\nMajor Domo: Captain EO? Captain EO?!\n\nEO sits up and looks around at what happened.\n\nOdy: I think we found the beacon. Captain EO, take a look at this.\n\nCaptain EO: The homing beacon. We ran right into it!\n\nThey all cheer.\n\nCaptain EO: Commander Bog!\n\nCommander Bog: Captain EO?\n\nCaptain EO: Everything’s OK, sir.\n\nMajor Domo: Right on time.\n\nCaptain EO: And we’ve reached the homing beacon, sir.\n\nCommander Bog: Well, so far, so good, Captain EO. But, I must admit that I am a bit surprised after the mess you made of your last mission. But now that you’ve found the beacon, take the map, find the Supreme Leader and give her the gift. You do have the map, don’t you?\n\nEO turns to check with his crew.\n\nOdy: No problem.\n\nIdy: No problem, sir.\n\nHooter: Right here.\n\nCommander Bog: Then get going! (His holographic image disappears.)\n\nHooter: Boy, do we have a problem.\n\nOdy: We’ll never find the supreme leader without a map.\n\nCaptain EO: (Whispers) Come on.\n\nThe crew leaves the ship in pursuit of the Supreme Leader even though they don’t know where she is. The setting is very dark with lots of smoke and scrap metal all around. Fuzzball flies right out at the audience. Hooter sneezes loudly.\n\nHooter: I couldn’t help it.\n\nCaptain EO: Quiet.\n\nHooter paws through the junk.\n\nCaptain EO: Hooter.\n\nHooter: I’m disguising myself.\n\nCaptain EO: Ha, ha. Hooter, listen. Put it back and let’s go.\n\nHooter blows his trunk and puts a trash can on his head.\n\nCaptain EO: (Laughing) Don’t be silly.\n\nHooter: Gotta have a disguise.\n\nAs they go further, they hear strange sounds and begin to look all around them. Hooter stops short and the rest bump into him creating a noise which alerts the guards.\n\nIdy & Ody: Shh!\n\nHooter: Sorry.\n\nGuards pop up from behind the heaps of metal and surround the crew.\n\nGuard: Get them!\n\nOutnumbered and nowhere to go, EO and the crew surrender and are led to the Supreme Leader’s dark, grungy lair.\n\nThe Supreme Leader is suspended like a spider from its web with numerous cables and tubes hanging all around her. She likes to click her long, sharp fingernails together and claw at the audience.\n\nIdy: Who is it?\n\nMajor Domo: The Supreme Leader.\n\nHooter: Hey, I told you I’d find her.\n\nSupreme Leader Supreme Leader: Silence! Infidel!\n\nHooter: Infidel?\n\nSupreme Leader: You infect my world with your presence. Turn the others into … trash cans!\n\nHooter: See you later trash can! (Runs over to Major Domo)\n\nSupreme Leader: And for him! 100 years of torture in my deepest dungeon.\n\nCaptain EO: (Remaining strong and unmoved) Your highness, my loyal companions and I accept these punishments.\n\nHooter: We do?\n\nIdy: Of course we do, he’s our captain.\n\nHooter: Speak for yourself. (Honks)\n\nCaptain EO: We have come here uninvited and unannounced.\n\nSupreme Leader: So, then we both admit to your … stupidity! Why have you come?\n\nCaptain EO: To bring a gift, your highness. To someone as beautiful as you.\n\nSupreme Leader: You think me … beautiful?\n\nCaptain EO: Very beautiful within, your highness, but without a key to unlock it. And that is my gift to you.\n\nSupreme Leader: So, let me see this gift.\n\nCaptain EO: Not only see, your highness, but hear.\n\nEO points to his ear and then to Minor Domo giving him the cue to get started. The music starts and Minor Domo transforms into a keyboard synthesizer. Major Domo kicks his leg off and it becomes a guitar. The rest of his metallic body becomes a complete drum set played by Idy and Ody.\n\nCaptain EO: Hooter, hurry up! (He removes his cape and throws it on the floor.)\n\nIdy: Come on, Hooter.\n\nOdy: Over here.\n\nHooter slips on EO’s cape and slides into the keyboard knocking it over which stops the music.\n\nIdy & Ody: No.\n\nSupreme Leader: Send in my troops!\n\nThe troops start coming in from underneath where the Supreme Leader is suspended.\n\nHooter: I got it, I got it! (Pushes keyboard back upright.)\n\nCaptain EO: Hooter!! Hurry up and fix it, Hooter!\n\nThe troops surround EO pushing at him with their weapons. A 3D effect here puts us in EO’s spot and we see the troop’s spears being jabbed right at us.\n\nSupreme Leader: Send him to my dungeon!\n\nCaptain EO: Hooter!\n\nHooter: (Sparks two wires together) I got it!\n\nHooter presses the keys, the music starts and the power of the music energizes Captain EO to push away the guards from around him.\n\nSupreme Leader: Get him!\n\nEO uses his power to turn the guards into dancers who then join his side. They fall in formation behind him and move forward toward the Supreme Leader.\n\nCaptain EO: Wu!\n\nThe group performs a series of dance moves and then EO sings.\n\nCaptain EO: We’re on a mission in the everlasting light that shines\nA revelation of the truth and chapters of our minds\n\nSynthesized Voice: So long, bad times\n\nCaptain EO: We’re gonna shake it up\nBreak it up\nWe’re sharing light brighter than the sun\n\nSynthesized Voice & Fuzzball: Hello, good times\n\nCaptain EO: We’re here to stimulate, eliminate, an’ congregate, illuminate\n\nDancers: We are here to change the world\n\nCaptain EO: We! Gonna change the world. We!\n\nDancers: We are here to change the world\n\nCaptain EO: Gonna change the world. Wu!\n\nThe group moves to the back of the room, turns and moves forward again making stomping sounds with each step.\n\nCaptain EO: So do surrender ’cause my power’s deep inside my soul\nSing it!\n\nDancers: We are here to change the world\n\nCaptain EO: We! Gonna change the world. Yeah, yeah.\n\nDancers: We are here to change the world\n\nCaptain EO: We! Gonna change the world. Wu!\n\nEO moves closer and up a few stairs toward the Supreme Leader.\n\nSupreme Leader: My whip warriors!\n\nThe warriors emerge from their cells and advance toward EO whipping at the air in front of EO. The dancers back away from the warriors and run to the back of the room. EO tries to destroy them with his laser power, but they deflect the light. The warriors get their whips wrapped around him. He spins out of their hold, but grabs onto the ends of both whips.\n\nSupreme Leader: Destroy him! Ha, ha, ha.\n\nUsing his laser power, the power runs through the whips to the warriors. A good idea, but it backfires on him. They deflect the power right back to him setting him back. He drops the whips and runs toward the open gate which then closes just before he gets there. The whip warriors approach. Fuzzball gets an idea and flies up behind the warriors and grabs hold of the end of their whips. He quickly ties the whips together. The warriors didn’t notice and lift their whips to crack at EO but instead get all tangled up in each other. The Supreme Leader gets a worried look on her face. EO uses his power and transforms the warriors into more dancers.\n\nHooter: Let’s go\n\nEO sets prisoners, who were locked up in cells built into the columns of the lair, free and transforms them into more dancers. EO does the Moon Walk and continues the song.\n\nCaptain EO: Wu!\n\nDancers: We are here to change the world\n\nCaptain EO: We’re gonna change the world, girl\n\nThe Supreme Leader covers her ears and groans.\n\nDancers: We are here to change the world\n\nCaptain EO: My brothers! My brothers! We’re gonna change the world.\n\nDancers: We are here to change the world\n\nCaptain EO: We! Deep down in my fire. Deep down in my soul, baby.\n\nDancers: We are here to change the world\n\nCaptain EO: We! Gonna change the world. Wu!\n\nEO rises and hovers above the ground, sends magic up to the Supreme Leader and transforms her into a beautiful woman. Her lair is also transformed into a beautiful palace. The dark, metallic columns covered with black tubes are now Greek-like white columns draped with vines. The sun is shining in the background.\n\nCaptain EO: Wu!\n\nThe dancers celebrate and gather around the Supreme Leader. EO’s crew joins EO and follow him toward the gate.\n\nCaptain EO: We’re sending out\nA major love\nAnd this is our\nMessage to you\nThe planets are linin’ up\nWe’re bringin’ brighter days\nThey’re all in line\nWaitin’ for you\nCan’t you see?\nYou’re just another part of me\nWu! Another part of me\n\nEO’s crew heads for the gate. Fuzzball flies out to the audience and waves good-bye.\n\nFuzzball: Bye, bye.\n\nEO salutes and they leave.\n\nCaptain EO: We’re takin’ over\nWe have the truth\nThis is our mission\nTo see it through\nDon’t point your finger\nNot dangerous\nThis is our planet\nYou’re one of us\n\nEO’s ship flies up in front of us and takes off towards another planet.\n\nCaptain EO: We’re sending out\nA major love\nAnd this is our\nMessage to you\nThe planets are linin’ up (Three planets appear in line, then disappear and a starfield appears.)\nWe’re bringin’ brighter days\nThey’re all in line\nWaitin’ for you (The “Captain EO” logo appears and, with the music, laser lights flash from behind the screen out through the room.)\nCan’t you see?\nYou’re just another part of me, Ee, Ee, Wu!\n\nThe logo fades away and the lights in the theater come on. Guests remove their 3D glasses and exit out the doors to their left into the Journey Into Imagination courtyard.\n";

        render(React.createElement(App, null), document.getElementById('app'));
    }, {}] }, {}, [1]);

},{}]},{},[1]);
