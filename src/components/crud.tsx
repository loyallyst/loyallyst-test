export interface CrudProps {
  schema:
    | string
    | {
        table: string;
        create: string;
        update?: string;
      };
  baseUrl:
    | string
    | {
        pathname: string;
        queryParams?: Record<string, any>;
      };
}

export function Crud(props: CrudProps) {
  return null;
}
