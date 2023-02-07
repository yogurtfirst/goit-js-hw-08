import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timePosition = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    player.setCurrentTime(getPosition() || 0);
};

const setPosition = function(data) {
    localStorage.setItem(timePosition, data.seconds);
};

const getPosition = function() {
    return localStorage.getItem(timePosition);
};

player.on('play', onPlay);
player.on('timeupdate', throttle(setPosition, 1000));