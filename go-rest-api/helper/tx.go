package helper

import "database/sql"

func CommitOrRollback(tx *sql.Tx) {
	error := recover()
	if error != nil {
		errorRollback := tx.Rollback()
		PanicIfError(errorRollback)
	} else {
		errorCommit := tx.Commit()
		PanicIfError(errorCommit)
	}
}
