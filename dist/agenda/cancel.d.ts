import { Agenda } from ".";
import { FilterQuery } from "mongodb";
/**
 * Cancels any jobs matching the passed MongoDB query, and removes them from the database.
 * @name Agenda#cancel
 * @function
 * @param FilterQuery<any> query MongoDB query to use when cancelling
 * @caller client code, Agenda.purge(), Job.remove()
 */
export declare const cancel: (this: Agenda, query: FilterQuery<any>) => Promise<number | undefined>;
//# sourceMappingURL=cancel.d.ts.map