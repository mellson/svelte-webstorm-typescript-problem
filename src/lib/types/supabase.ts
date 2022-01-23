/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/biler": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.biler.id"];
          created_at?: parameters["rowFilter.biler.created_at"];
          model?: parameters["rowFilter.biler.model"];
          mærke_id?: parameters["rowFilter.biler.mærke_id"];
          type?: parameters["rowFilter.biler.type"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["biler"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** biler */
          biler?: definitions["biler"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.biler.id"];
          created_at?: parameters["rowFilter.biler.created_at"];
          model?: parameters["rowFilter.biler.model"];
          mærke_id?: parameters["rowFilter.biler.mærke_id"];
          type?: parameters["rowFilter.biler.type"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.biler.id"];
          created_at?: parameters["rowFilter.biler.created_at"];
          model?: parameters["rowFilter.biler.model"];
          mærke_id?: parameters["rowFilter.biler.mærke_id"];
          type?: parameters["rowFilter.biler.type"];
        };
        body: {
          /** biler */
          biler?: definitions["biler"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/bilmærker": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bilmærker.id"];
          created_at?: parameters["rowFilter.bilmærker.created_at"];
          navn?: parameters["rowFilter.bilmærker.navn"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["bilmærker"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** bilmærker */
          bilmærker?: definitions["bilmærker"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bilmærker.id"];
          created_at?: parameters["rowFilter.bilmærker.created_at"];
          navn?: parameters["rowFilter.bilmærker.navn"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bilmærker.id"];
          created_at?: parameters["rowFilter.bilmærker.created_at"];
          navn?: parameters["rowFilter.bilmærker.navn"];
        };
        body: {
          /** bilmærker */
          bilmærker?: definitions["bilmærker"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  biler: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    model: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `bilmærker.id`.<fk table='bilmærker' column='id'/>
     */
    mærke_id: number;
    /**
     * Format: public.biltyper
     * @enum {string}
     */
    type: "hatchback" | "stationcar" | "varevogn" | "lastbil";
  };
  bilmærker: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    navn: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description biler */
  "body.biler": definitions["biler"];
  /** Format: bigint */
  "rowFilter.biler.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.biler.created_at": string;
  /** Format: text */
  "rowFilter.biler.model": string;
  /** Format: bigint */
  "rowFilter.biler.mærke_id": string;
  /** Format: public.biltyper */
  "rowFilter.biler.type": string;
  /** @description bilmærker */
  "body.bilmærker": definitions["bilmærker"];
  /** Format: bigint */
  "rowFilter.bilmærker.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.bilmærker.created_at": string;
  /** Format: text */
  "rowFilter.bilmærker.navn": string;
}

export interface operations {}

export interface external {}