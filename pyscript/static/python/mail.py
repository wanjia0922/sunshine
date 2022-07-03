from email.mime.text import MIMEText
from email.header import Header
from smtplib import SMTP_SSL

# qq mail sending server
host_server = 'smtp.qq.com'
sender_mail = 'wanjia0922@qq.com'
sender_passcode = 'PASS_CODE'

# receiver mail
receiver='wanjia0922@qq.com'
# mail contents
mail_content = 'python send email test'
# mail title
mail_title = 'Python Email'

def send_mail(receiver='', mail_title='', mail_content=''):
    # ssl login
    smtp = SMTP_SSL(host_server)
    # set_debuglevel() for debug, 1 enable debug, 0 for disable
    # smtp.set_debuglevel(1)
    smtp.ehlo(host_server)
    smtp.login(sender_mail, sender_passcode)

    # construct message
    msg = MIMEText(mail_content, "plain", 'utf-8')
    msg["Subject"] = Header(mail_title, 'utf-8')
    msg["From"] = sender_mail
    msg["To"] = receiver
    smtp.sendmail(sender_mail, receiver, msg.as_string())
    smtp.quit()

send_mail(receiver=receiver,mail_title=mail_title,mail_content=mail_content)