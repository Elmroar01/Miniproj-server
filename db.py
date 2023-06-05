import mysql.connector
import pandas as pd

mydb = mysql.connector.connect(
    host = "localhost",
    user =  "root",
    password = "@Unoing1122",
    database = "tas",
)
mycursor = mydb.cursor()

data = pd.read_excel('Mock_up_pi_update.xlsx', sheet_name="Data Daily")
df = pd.DataFrame(data)


# for i in df.index:
#   sqlFormula = "insert into generaljournal (genjournalid, expnamedebit,expnamecredit,debit,credit,date,refponumber) values ('{}', '{}', '{}', {}, {}, '{}', '{}' )".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into generalledger (genledgerid, expname,debit,credit,date,refponumber, balance) values ('{}', '{}', {}, {}, '{}','{}',{} )".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into salesoffice (salesofficeid,ponumber,vehiclenumber,arrivaltime,starttime,endtime,departuretime,servicetime) values ('{}','{}','{}','{}','{}','{}','{}',{} )".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7])


# for i in df.index:
#   sqlFormula = "insert into weightbound (wbid,ponumber,vehiclenumber,arrivaltime,starttime,endtime,departuretime,servicetime,wbtype) values ('{}','{}','{}','{}','{}','{}','{}',{},'{}')".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7], df.iloc[i,8])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into bay (bayid,ponumber,vehiclenumber,arrivaltime,starttime,endtime,departuretime,servicetime,baytype) values ('{}','{}','{}','{}','{}','{}','{}',{},'{}')".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7], df.iloc[i,8])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into exitgate (exitgateid,ponumber,vehiclenumber,departuretime) values ('{}','{}','{}','{}')".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into customer (customerid, customer, companyname, address, taxpayerid) values ('{}','{}','{}','{}', '{}')".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into purchaseorder (ponumber, paymentnumber, invoiceno, taxpayerid, customerid, date, gastype, qty, dayprice, amount, vehiclenumber) values ('{}','{}','{}','{}', '{}','{}', '{}', {}, {},{},'{}')".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7],df.iloc[i, 8],df.iloc[i, 9],df.iloc[i, 10])
#   mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into invoice (invoiceid, paymentnumber, ponumber, taxpayerid, customerid, vehiclenumber,date, gastype, qty, dayprice, amount, tax,totalamount) values ('{}','{}','{}','{}', '{}','{}', '{}', '{}',{} , {},{},{},{})".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7],df.iloc[i, 8],df.iloc[i, 9],df.iloc[i, 10],df.iloc[i, 11],df.iloc[i, 12])
#   mycursor.execute(sqlFormula)

for i in df.index:
  sqlFormula = "insert into dailykpi (Date, Amountdiesel,Amountgas95,Notruckin,Notruckout,Avgwaittimeso,Avgwaittimeib,Avgwaittimeob,Avgwaittimediesel,Avgwaittimegas95,Avgservicetimeso,Avgservicetimeib,Avgservicetimeob,Avgservicetimediesel,Avgservicetimegas95,Totalwip,Faildiesel,Failgas95,Avgcycletime, ID) values ('{}',{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{})".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7],df.iloc[i, 8],df.iloc[i, 9],df.iloc[i, 10],df.iloc[i, 11],df.iloc[i, 12],df.iloc[i, 13],df.iloc[i, 14],df.iloc[i, 15],df.iloc[i, 16],df.iloc[i, 17],df.iloc[i, 18],df.iloc[i, 19])
  mycursor.execute(sqlFormula)

# for i in df.index:
#   sqlFormula = "insert into weeklykpi (date, amountdiesel,amountgas95,notruckin,notruckout,avgwaittimeso,avgwaittimeib,avgwaittimeob,avgwaittimediesel,avgwaittimegas95,avgservicetimeso,avgservicetimeib,avgservicetimeob,avgservicetimediesel,avgservicetimegas95,avgwip,avgcycletime) values ('{}',{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{})".format(df.iloc[i, 0],df.iloc[i, 1],df.iloc[i, 2],df.iloc[i, 3],df.iloc[i, 4],df.iloc[i, 5],df.iloc[i, 6],df.iloc[i, 7],df.iloc[i, 8],df.iloc[i, 9],df.iloc[i, 10],df.iloc[i, 11],df.iloc[i, 12],df.iloc[i, 13],df.iloc[i, 14],df.iloc[i, 15],df.iloc[i, 16],)
#   mycursor.execute(sqlFormula)

  

mydb.commit()
