REM
REM Run program without showing the Command Prompt
REM Useful for creating Shortcuts
REM

If (WScript.Arguments.Count = 0) Then
    WScript.Echo "Usage: " & WScript.ScriptName & " Prog [Arg...]"
    WScript.Quit 1
End If

REM Windows 10 does NOT allow starting unknown programs in
REM the hidden state. We trick it here by first running
REM something it knows really well: cmd.exe /C.

ReDim Args(WScript.Arguments.Count + 1)
Args(0) = "cmd.exe /C"

For i = 0 To WScript.Arguments.Count - 1
   Args(i + 1) = WScript.Arguments(i)
Next

Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run Join(Args), 0, False
