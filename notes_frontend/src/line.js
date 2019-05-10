class Line {
  constructor(data) {
    this.id = data.id;
    this.author = data.author;
    this.content = data.content;
    this.color = data.color;
    this.corpse_id = data.corpse_id;
    Line.all.push(this);
  }

  renderListItem() {
    return `
    <li>
      <h3>${this.title}
        <button data-id=${this.id}>edit</button>
      </h3>
      
    </li>`;
  }
}

Line.all = [];
