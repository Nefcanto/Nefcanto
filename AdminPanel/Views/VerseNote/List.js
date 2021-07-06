var VerseNoteList = {
    route: '/verseNote/list',
    constructor: function () {
        var _this = this;
        _this.entity = 'verseNote';
        app.initializeList(_this);
        _this.upsertComponentDialog = 'VerseNoteUpsert';
        app.addBrowseDialogFor(_this, 'Chapter', 'ChapterNumber');
        app.setTitle('نکات آیات');
        _this.load();
    }
}