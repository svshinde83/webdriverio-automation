import Base from "../Base";

class FiltersPage extends Base {

    get description() {
        return $('#aa_description');
    }

    fillDescription(text) {
        this.description.waitForExist();
        this.description.setValue(text);
    }

    get submitButton() {
        return $('button[type="submit"]');
    }

    submitFilter() {
        this.submitButton.click();
    }

    get resultsTable() {
        return $('#filtered_transactions_for_account');
    }

    get message() {
        return $('.well');
    }

    resultsTableIsVisible() {
        this.resultsTable.waitForExist();
    }
}

export default new FiltersPage();