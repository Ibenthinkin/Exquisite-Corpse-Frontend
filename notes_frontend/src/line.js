class Line {
  constructor(data) {
    this.id = data.id;
    this.author = data.author;
    this.content = data.content;
    this.color = data.color;
    this.corpse_id = data.corpse_id;
    Line.all.push(this);
  }

  static findById(id) {
    return this.all.find(line => line.id === id);
  }


  renderListItem() {
    return `
    <li>
      <h4>${this.content}
        <button data-id=${this.id}>edit</button>
      </h4>

    </li>`;
  }

  update({ author, content, color }) {
    this.author = author;
    this.content = content;
    this.color = color;

  }

}

Line.all = [];
