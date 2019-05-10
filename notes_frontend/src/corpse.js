class Corpse {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.imageURL = data.imageURL;
    Corpse.all.push(this);
  }

  renderListItem() {
    return `
    <li id="corpse_id${this.id}" >
      <h3>${this.title}
        <button data-id=${this.id} class="edit">edit</button>
        <button data-id=${this.id} class="delete">delete</button>
      </h3>
    </li>`;
  }

  static findById(id) {
    return this.all.find(corpse => corpse.id === id);
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" value="${this.title}" />
      </p>
      <label>Image</label>
      <p>
        <textarea>${this.imageURL}</textarea>
      </p>
      <button type='submit'>Save Corpse</button>
    </form>
  `;
  }



}

Corpse.all = [];
