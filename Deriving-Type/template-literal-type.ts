type ReadPermissions = "read" | "no-read";
type WritePermissions = "write" | "no-write";
type LiteralPermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: LiteralPermissions;
}

type DataFileEventnames = `${keyof DataFile}Changed`;

type DataFileEvents = {
    [K in DataFileEventnames]: () => void;
}