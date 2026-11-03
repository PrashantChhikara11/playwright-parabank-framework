import { Locator, Page } from "@playwright/test";

export class AccountOverviewPage
{

    readonly page:Page;
    readonly accountTable:Locator;
    readonly acountTableHeaders:Locator;
    readonly accountTableRows:Locator;
    readonly acoountTableRowsContents:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.accountTable=page.locator('#showOverview #accountTable');
        this.acountTableHeaders=this.accountTable.locator('thead th');
        this.accountTableRows=this.accountTable.locator('tbody tr'); 
        this.acoountTableRowsContents=this.accountTableRows.locator('td')     

    }

    async allHeadersContent()
    {
        return await this.acountTableHeaders.allTextContents();
    }

    async allRowsContent()
    {
        await this.accountTableRows.first().waitFor();
        return await this.acoountTableRowsContents.allTextContents()
    }

    async rowViseDataExtracter(rowCount:number)
    {
        const tableData : string[][]=[];

        for(let r=0;r<rowCount;r++)
        {
            //await this.accountTable.nth(r).waitFor()
            const cellValue=await this.accountTableRows.nth(r).locator('td').allTextContents();
            tableData.push(cellValue);
            console.log(`Row ${r+1}: `,cellValue)
        }

        return tableData;
    }

    async extractAccountNumbers()
    {
        let allTableData:string[][]=await this.rowViseDataExtracter(await this.accountTableRows.count())
        for(let r=0;r<allTableData.length;r++)
        {            
            console.log(allTableData[r][0])
        }
      
    } 

    

}