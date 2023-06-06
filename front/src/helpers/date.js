// массив месяцев для форматирования дат
const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

const formatDate = (date) => {
    const dateElements = date.split('-');
    return dateElements[2] + " " + months[Number(dateElements[1]) - 1];
}

const formatTime = (time) => {
    const timeMinutes = time.split(':');
    return timeMinutes[0] + ":" + timeMinutes[1];
}

module.exports = {formatDate, formatTime};