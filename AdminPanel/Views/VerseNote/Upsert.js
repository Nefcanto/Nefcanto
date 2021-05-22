var VerseNoteUpsert = {
    templateUrl: '/verseNote/upsertHtml',
    route: '/verseNote/upsert',
    constructor: [ng.material.dialog.MatDialogRef, ng.material.dialog.MAT_DIALOG_DATA, function (dialog, dialogData) {
        var _this = this;
        _this.entity = 'VerseNote';
        _this.singularName = 'نکته';
        _this.dialog = dialog;
        _this.dialogData = dialogData;
        app.initializeForm(_this);
        app.addBrowseDialogFor(_this, 'Chapter', 'ChapterNumber');
    }]
}