import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    player.setCurrentTime(getPosition() || 0);
};

const setPosition = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

const getPosition = function() {
    return JSON.parse(localStorage.getItem('videoplayer-current-time'));
};

player.on('play', onPlay);
player.on('timeupdate', throttle(setPosition, 1000));