class Arrangement {

      constructor(){
        this._statusnames={"Reserved","Passed","Paid","Canceled"};
        this.id = CreateNewId("Arrangement");
        this.Reservation_id=0;
        this.Table_id=0;
        this.Room_id=0;
        this.Name="";
        this.Price=0.0;
        this.PriceCurrency="EUR";
        this.Status=0;
      }

      get StatusName() {
          if (this.Status<0 || this.Status>=this._statusnames.length) return "Unknown"
          return this._statusnames[this.Status];
      }
              
}
