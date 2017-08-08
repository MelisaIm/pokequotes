const { div } = 'elementx';

module.exports = function Widget(data) {
	return div();
};


renderWidget(widget) {
  const card = div(
    { class: 'col s12 l6' },
    div(
      { class: 'card hoverable center-align' },
      div({ class: 'card-image' }),
      div({ class: 'card-content center' }, `${widget.text}\n ${widget.author}`)
    )
  );
  const column = div(card);
  const display = document.getElementById('display');
  display.appendChild(column);
}
